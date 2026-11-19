import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/izf-ribdx.css';
import '../../css/w/wvlva5b8f.css';
import '../../css/w/wcxzqmhcl.css';
import '../../css/v/vi2m5ubzl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="izf-ribdx"/><path class="wvlva5b8f"/><path class="wcxzqmhcl"/><path class="vi2m5ubzl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:house-flood"} {...others} />);
}

export default Component;
