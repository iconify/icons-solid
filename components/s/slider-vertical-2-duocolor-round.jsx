import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c8zkm23pf.css';
import '../../css/w/wrsjigb-f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="c8zkm23pf"/><path class="wrsjigb-f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:slider-vertical-2-duocolor-round"} {...others} />);
}

export default Component;
