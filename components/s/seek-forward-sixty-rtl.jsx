import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/krpzqqbft.css';
import '../../css/f/fgfzqmx6k.css';
import '../../css/v/va3gykbxr.css';
import '../../css/x/x0td-_mzu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><ellipse class="krpzqqbft"/><path class="fgfzqmx6k"/><path class="va3gykbxr"/><path class="x0td-_mzu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:seek-forward-sixty-rtl"} {...others} />);
}

export default Component;
