import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k5s4bo5vb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="k5s4bo5vb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:obs-studio-logo-block"} {...others} />);
}

export default Component;
