import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yon6xs4ru.css';
import '../../css/s/sds0i4bbi.css';
import '../../css/s/sg1uy3bnt.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yon6xs4ru"/><path clip-rule="evenodd" class="sds0i4bbi"/><path class="sg1uy3bnt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:beanie-flat"} {...others} />);
}

export default Component;
