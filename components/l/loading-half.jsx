import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zlc-7xb1a.css';
import '../../css/c/cwr-0yo1o.css';
import '../../css/v/v0a1o1buw.css';
import '../../css/h/h8wofmywn.css';
import '../../css/f/fvqzn1cvn.css';
import '../../css/q/qv3_zobja.css';
import '../../css/b/b0f1q8mdv.css';
import '../../css/i/iy4-gtbif.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zlc-7xb1a"/><path class="cwr-0yo1o"/><path class="v0a1o1buw"/><path class="h8wofmywn"/><path class="fvqzn1cvn"/><path class="qv3_zobja"/><path class="b0f1q8mdv"/><path class="iy4-gtbif"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:loading-half"} {...others} />);
}

export default Component;
