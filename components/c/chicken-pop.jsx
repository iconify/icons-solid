import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g2qvxrb5j.css';
import '../../css/x/xnyexgb8v.css';
import '../../css/m/mzlcjnc6e.css';
import '../../css/r/r7reecb3y.css';
import '../../css/z/zea1-7nrj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="g2qvxrb5j"/><path class="xnyexgb8v"/><path class="mzlcjnc6e"/><path class="r7reecb3y"/><path clip-rule="evenodd" class="zea1-7nrj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:chicken-pop"} {...others} />);
}

export default Component;
