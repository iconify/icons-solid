import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z9bimvbjr.css';
import '../../css/w/w-h-j4bey.css';
import '../../css/t/t3lpz8b2k.css';
import '../../css/a/ah7dfb-3o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z9bimvbjr"/><path class="w-h-j4bey"/><path class="t3lpz8b2k"/><path class="ah7dfb-3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:data-transfer"} {...others} />);
}

export default Component;
