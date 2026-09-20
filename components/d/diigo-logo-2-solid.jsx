import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eu3-adbym.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="eu3-adbym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:diigo-logo-2-solid"} {...others} />);
}

export default Component;
