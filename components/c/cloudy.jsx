import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qv8gs7hco.css';
import '../../css/t/to-usub9c.css';
import '../../css/d/dhl0amjcv.css';
import '../../css/b/b3akq5b3v.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qv8gs7hco"/><path class="to-usub9c"/><path clip-rule="evenodd" class="dhl0amjcv"/><path class="b3akq5b3v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:cloudy"} {...others} />);
}

export default Component;
