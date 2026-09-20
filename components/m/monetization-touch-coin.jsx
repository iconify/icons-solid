import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/drvllbbyr.css';
import '../../css/h/h0b-md9tw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="drvllbbyr"/><path class="h0b-md9tw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:monetization-touch-coin"} {...others} />);
}

export default Component;
