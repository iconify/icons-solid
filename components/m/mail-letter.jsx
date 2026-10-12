import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v7dh059pd.css';
import '../../css/z/ztstzibly.css';
import '../../css/s/spbxfpjqf.css';
import '../../css/l/lgalliejm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v7dh059pd"/><path class="ztstzibly"/><path class="spbxfpjqf"/><path class="lgalliejm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mail-letter"} {...others} />);
}

export default Component;
