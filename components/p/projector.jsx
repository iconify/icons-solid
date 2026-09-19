import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v6e70qhux.css';
import '../../css/d/dwaxjacqs.css';
import '../../css/t/tjjl-3bqq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="v6e70qhux"/><circle class="dwaxjacqs"/><circle class="tjjl-3bqq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:projector"} {...others} />);
}

export default Component;
