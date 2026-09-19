import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/x/xdqh4gbub.css';
import '../../css/t/ta4flmb2c.css';
import '../../css/t/tl-og9bwb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><rect class="xdqh4gbub"/><path class="ta4flmb2c"/><circle class="tl-og9bwb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:stereo-one"} {...others} />);
}

export default Component;
