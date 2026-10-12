import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zcf1-0buu.css';
import '../../css/o/o3mr77bmr.css';
import '../../css/j/jplz2vvke.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zcf1-0buu"/><path class="o3mr77bmr"/><circle class="jplz2vvke"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:eye-off"} {...others} />);
}

export default Component;
