import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/janzo88gl.css';
import '../../css/h/hc3f2obki.css';
import '../../css/u/uhd7hfh2i.css';
import '../../css/u/uwq9zwb5l.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="janzo88gl"/><path class="hc3f2obki"/><path class="uhd7hfh2i"/><path class="uwq9zwb5l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:watchtower-castle"} {...others} />);
}

export default Component;
