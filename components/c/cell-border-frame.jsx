import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m1xr4eb-l.css';
import '../../css/z/zl3vbi-0a.css';
import '../../css/z/z1i8lj68h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="m1xr4eb-l"/><path class="zl3vbi-0a"/><path class="z1i8lj68h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:cell-border-frame"} {...others} />);
}

export default Component;
