import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nknoh5bro.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nknoh5bro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:cucumber-io-logo-block"} {...others} />);
}

export default Component;
