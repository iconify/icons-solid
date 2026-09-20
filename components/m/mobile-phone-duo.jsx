import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thjuvbz3w.css';
import '../../css/u/u-8mgp3zf.css';
import '../../css/i/izn_1xndl.css';
import '../../css/a/a9tarm8wr.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="thjuvbz3w"><path class="u-8mgp3zf"/><path class="izn_1xndl"/><path class="a9tarm8wr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:mobile-phone-duo"} {...others} />);
}

export default Component;
