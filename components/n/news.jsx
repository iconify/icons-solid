import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ppv50ibab.css';
import '../../css/g/gkr3d_b7o.css';
import '../../css/m/mx3fuqlod.css';
import '../../css/g/gzqzkibro.css';
import '../../css/n/nrb0af6fj.css';

const viewBox = {"width":99,"height":65.991};
const content = `<path class="ppv50ibab"/><path class="gkr3d_b7o"/><path class="mx3fuqlod"/><path class="gzqzkibro"/><path class="nrb0af6fj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:news"} {...others} />);
}

export default Component;
