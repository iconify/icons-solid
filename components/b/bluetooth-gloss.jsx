import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m6emu6ghc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m6emu6ghc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bluetooth-gloss"} {...others} />);
}

export default Component;
