import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/d1_pkrbvj.css';
import '../../css/p/pt65rjb_z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="d1_pkrbvj"/><path class="pt65rjb_z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:database-script"} {...others} />);
}

export default Component;
