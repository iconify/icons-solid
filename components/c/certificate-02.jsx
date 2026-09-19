import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/d/d0_ljdbhp.css';
import '../../css/f/f439rob6g.css';
import '../../css/r/rdk114kho.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="d0_ljdbhp"/><circle class="f439rob6g"/><path class="rdk114kho"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:certificate-02"} {...others} />);
}

export default Component;
