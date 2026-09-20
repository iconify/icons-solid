import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pzqnoccyv.css';
import '../../css/z/z91rwbb8x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pzqnoccyv"/><path clip-rule="evenodd" class="z91rwbb8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:netflix-logo-solid"} {...others} />);
}

export default Component;
