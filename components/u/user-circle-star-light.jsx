import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qxly0_vhn.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="qxly0_vhn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:user-circle-star-light"} {...others} />);
}

export default Component;
