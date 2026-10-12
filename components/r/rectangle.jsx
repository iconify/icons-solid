import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ug1rf346f.css';
import '../../css/v/vfomhdbah.css';

const viewBox = {"width":24,"height":24};
const content = `<g transform="matrix(0 -1 -1 0 22.2 19.25)" class="ft5dv1b6b"><rect class="ug1rf346f"/><rect class="vfomhdbah"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:rectangle"} {...others} />);
}

export default Component;
