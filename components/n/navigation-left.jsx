import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g7zgftbpr.css';
import '../../css/m/mp1224b4f.css';
import '../../css/o/o41gdbbxm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g7zgftbpr"/><path class="mp1224b4f"/><path class="o41gdbbxm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:navigation-left"} {...others} />);
}

export default Component;
