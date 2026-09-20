import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tliw611xy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tliw611xy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:app-store-logo-solid"} {...others} />);
}

export default Component;
