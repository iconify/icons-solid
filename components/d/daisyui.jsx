import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fxkgtbnra.css';
import '../../css/w/ww8n9zbdv.css';
import '../../css/l/lh9--2mlv.css';
import '../../css/e/epyi31bqc.css';

const viewBox = {"width":1024,"height":1024};
const content = `<g class="ft5dv1b6b"><rect class="fxkgtbnra"/><circle class="ww8n9zbdv"/><circle class="lh9--2mlv"/><circle class="epyi31bqc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:daisyui"} {...others} />);
}

export default Component;
