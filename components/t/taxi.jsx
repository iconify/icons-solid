import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hkvrzbglf.css';
import '../../css/h/h05n21yzo.css';
import '../../css/w/wbet_9bwr.css';
import '../../css/b/b807x5x0j.css';
import '../../css/a/a9dukjbuv.css';
import '../../css/o/ocej39bsb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hkvrzbglf"/><path class="h05n21yzo"/><path class="wbet_9bwr"/><circle transform="rotate(90 6.99 17.52)" class="b807x5x0j"/><circle transform="rotate(90 16.85 17.52)" class="a9dukjbuv"/><path class="ocej39bsb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:taxi"} {...others} />);
}

export default Component;
