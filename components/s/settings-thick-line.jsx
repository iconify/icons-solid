import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_cyjh5hd.css';
import '../../css/x/x5-o967jz.css';
import '../../css/l/l9ltfkg5m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n_cyjh5hd"><path class="x5-o967jz"/><path class="l9ltfkg5m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:settings-thick-line"} {...others} />);
}

export default Component;
