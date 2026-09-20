import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dj05c4b-z.css';
import '../../css/h/h9-w-wbzx.css';
import '../../css/x/xcyk673ka.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dj05c4b-z"/><path class="h9-w-wbzx"/><path class="xcyk673ka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:thermometer-sun-two-tone"} {...others} />);
}

export default Component;
