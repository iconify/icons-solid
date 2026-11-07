import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xxxr0xdbr.css';
import '../../css/g/ghd9kjblg.css';
import '../../css/z/z9kgvgb1l.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xxxr0xdbr"/><path clip-rule="evenodd" class="ghd9kjblg"/><path class="z9kgvgb1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:camera-add-bold-duotone"} {...others} />);
}

export default Component;
