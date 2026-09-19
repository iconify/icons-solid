import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xfryjnehm.css';

const viewBox = {"width":1792,"height":1664};
const content = `<path class="xfryjnehm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:cat-face"} {...others} />);
}

export default Component;
