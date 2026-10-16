import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6mu4cbgx.css';
import '../../css/e/eqj_f_bga.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="v6mu4cbgx"/><path class="eqj_f_bga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chain-20"} {...others} />);
}

export default Component;
