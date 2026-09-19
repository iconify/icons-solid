import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/paaeio2fp.css';
import '../../css/r/rx4b74v7b.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="paaeio2fp"/><path class="rx4b74v7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:postcard"} {...others} />);
}

export default Component;
