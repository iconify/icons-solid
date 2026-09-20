import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eyu2l48ig.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="eyu2l48ig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:paypal-logo-block"} {...others} />);
}

export default Component;
