import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/n/n11jugb8i.css';
import '../../css/i/isixl1b8l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="n11jugb8i"/><path class="isixl1b8l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:zoom-in"} {...others} />);
}

export default Component;
