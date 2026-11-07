import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r-5ygck_n.css';
import '../../css/e/e_kfhmj_p.css';
import '../../css/i/i2ed-zb3p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r-5ygck_n"/><path class="e_kfhmj_p"/><path clip-rule="evenodd" class="i2ed-zb3p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panels-bottom-right-bold"} {...others} />);
}

export default Component;
