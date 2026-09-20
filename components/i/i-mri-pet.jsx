import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hjevd7biy.css';
import '../../css/g/gkse_6x1h.css';
import '../../css/v/v-w-_tb_r.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="hjevd7biy"/><path class="gkse_6x1h"/><path class="v-w-_tb_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-mri-pet"} {...others} />);
}

export default Component;
