import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ht2tk_has.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ht2tk_has"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:sign-out-alt-solid"} {...others} />);
}

export default Component;
