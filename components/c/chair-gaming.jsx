import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ebkt5ob7r.css';
import '../../css/s/svr33jeab.css';
import '../../css/c/cr7n80bgj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ebkt5ob7r"/><path class="svr33jeab"/><path class="cr7n80bgj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chair-gaming"} {...others} />);
}

export default Component;
