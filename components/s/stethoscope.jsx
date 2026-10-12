import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t3d5jiygg.css';
import '../../css/v/vyitz_kgi.css';
import '../../css/y/ys7yq-5az.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="t3d5jiygg"/><path class="vyitz_kgi"/><circle class="ys7yq-5az"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:stethoscope"} {...others} />);
}

export default Component;
