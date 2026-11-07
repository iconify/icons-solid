import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iik--rn3y.css';
import '../../css/t/t8sc6ex9y.css';
import '../../css/n/n90j2x48z.css';
import '../../css/t/tnuzmj_om.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iik--rn3y"/><path class="t8sc6ex9y"/><path class="n90j2x48z"/><path class="tnuzmj_om"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:globe-bold"} {...others} />);
}

export default Component;
