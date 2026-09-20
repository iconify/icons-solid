import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eb_s45ttp.css';
import '../../css/i/ig6qk5bvs.css';
import '../../css/g/g-u85kvup.css';
import '../../css/f/f9z6xabgr.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="eb_s45ttp"/><path class="ig6qk5bvs"/><path clip-rule="evenodd" class="g-u85kvup"/><path clip-rule="evenodd" class="f9z6xabgr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:dressing-table-flat"} {...others} />);
}

export default Component;
