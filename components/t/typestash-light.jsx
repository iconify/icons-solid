import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g5g7mrbhx.css';
import '../../css/h/hnc9r9bik.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g5g7mrbhx"/><path class="hnc9r9bik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:typestash-light"} {...others} />);
}

export default Component;
