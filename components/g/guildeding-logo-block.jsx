import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ell9tsicb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ell9tsicb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:guildeding-logo-block"} {...others} />);
}

export default Component;
