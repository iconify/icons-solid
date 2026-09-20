import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0sqvp_wh.css';
import '../../css/e/eny6z_bgj.css';
import '../../css/g/gzwu-mp2o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z0sqvp_wh"/><path class="eny6z_bgj"/><path class="gzwu-mp2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:envelope-sealed-bold"} {...others} />);
}

export default Component;
