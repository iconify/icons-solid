import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/v/vw1o8d0ae.css';
import '../../css/b/bm6ci6bnn.css';
import '../../css/h/hd4mi7i3d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="vw1o8d0ae"/><path class="bm6ci6bnn"/><path class="hd4mi7i3d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:gastrointestinal"} {...others} />);
}

export default Component;
