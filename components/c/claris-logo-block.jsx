import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vr0vqrbwe.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vr0vqrbwe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:claris-logo-block"} {...others} />);
}

export default Component;
