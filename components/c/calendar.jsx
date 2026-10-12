import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z9vtkrbdu.css';
import '../../css/u/uo2ylvp5t.css';
import '../../css/r/rkgl6objd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="z9vtkrbdu"/><rect class="uo2ylvp5t"/><path class="rkgl6objd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:calendar"} {...others} />);
}

export default Component;
