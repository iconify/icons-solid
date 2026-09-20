import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/juo-s5bip.css';
import '../../css/y/you5cjbju.css';
import '../../css/g/geop9x_qi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="juo-s5bip"/><path class="you5cjbju"/><path class="geop9x_qi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:park-flat"} {...others} />);
}

export default Component;
