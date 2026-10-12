import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ajv8nnbbt.css';
import '../../css/y/y5rx7925u.css';
import '../../css/r/ri-2wptou.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ajv8nnbbt"/><path class="y5rx7925u"/><path class="ri-2wptou"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:house-filled"} {...others} />);
}

export default Component;
