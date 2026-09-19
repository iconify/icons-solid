import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ceji5w1rd.css';
import '../../css/p/p94ddv79d.css';
import '../../css/g/gta12jdha.css';
import '../../css/e/eqmcb4bzp.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ceji5w1rd"/><path class="p94ddv79d"/><path class="gta12jdha"/><path class="eqmcb4bzp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:flashlight"} {...others} />);
}

export default Component;
