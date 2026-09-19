import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xq3j7uixf.css';

const viewBox = {"width":22,"height":24};
const content = `<path class="xq3j7uixf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:asterisk"} {...others} />);
}

export default Component;
