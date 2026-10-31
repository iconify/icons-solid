import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yzv02bb8d.css';
import '../../css/x/xihjwnk6c.css';
import '../../css/h/h5xs2mkpb.css';
import '../../css/w/w0lmbq-oh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yzv02bb8d"/><path class="xihjwnk6c"/><path class="h5xs2mkpb"/><path class="w0lmbq-oh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:power-pop"} {...others} />);
}

export default Component;
