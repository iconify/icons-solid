import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c056xx9hp.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="c056xx9hp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:chicken"} {...others} />);
}

export default Component;
