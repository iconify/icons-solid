import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dzkwn1gtf.css';
import '../../css/a/a4jgiob7z.css';
import '../../css/n/n7e06sbmp.css';
import '../../css/x/x36mxccup.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="dzkwn1gtf"/><path class="a4jgiob7z"/><circle class="n7e06sbmp"/><path class="x36mxccup"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:women"} {...others} />);
}

export default Component;
