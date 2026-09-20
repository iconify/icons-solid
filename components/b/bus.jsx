import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pathnjiyv.css';
import '../../css/e/ec_xsy4gs.css';
import '../../css/i/iugk-7bxf.css';
import '../../css/a/a0zl88bqz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pathnjiyv"/><circle class="ec_xsy4gs"/><path class="iugk-7bxf"/><circle class="a0zl88bqz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:bus"} {...others} />);
}

export default Component;
