import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/myry6db3q.css';
import '../../css/w/w1li8bbqj.css';
import '../../css/n/n0-4s7bet.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="myry6db3q"/><path class="w1li8bbqj"/><path class="n0-4s7bet"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:instagram"} {...others} />);
}

export default Component;
