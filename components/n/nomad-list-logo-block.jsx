import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vky8wwlcb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vky8wwlcb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:nomad-list-logo-block"} {...others} />);
}

export default Component;
