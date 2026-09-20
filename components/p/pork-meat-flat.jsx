import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gl61zdbbv.css';
import '../../css/d/doeps1g-t.css';
import '../../css/z/zr8jw-s_z.css';
import '../../css/n/nn73j2b3w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="gl61zdbbv"/><path clip-rule="evenodd" class="doeps1g-t"/><path class="zr8jw-s_z"/><path clip-rule="evenodd" class="nn73j2b3w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:pork-meat-flat"} {...others} />);
}

export default Component;
