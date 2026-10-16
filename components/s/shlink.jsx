import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9ybb-cwt.css';
import '../../css/y/yfzrx8bbn.css';
import '../../css/h/h461_iiso.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="n9ybb-cwt"><path class="yfzrx8bbn"/><path class="h461_iiso"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:shlink"} {...others} />);
}

export default Component;
