import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ac_vz1bhc.css';
import '../../css/z/zgk5_n2-v.css';

const viewBox = {"width":17,"height":24};
const content = `<path class="ac_vz1bhc"/><path class="zgk5_n2-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:metro"} {...others} />);
}

export default Component;
