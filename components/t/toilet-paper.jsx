import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nqiqvacww.css';
import '../../css/k/kv4hsgpqw.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="nqiqvacww"/><path class="kv4hsgpqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:toilet-paper"} {...others} />);
}

export default Component;
