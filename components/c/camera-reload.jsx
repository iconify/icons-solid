import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i0m2c7h4d.css';
import '../../css/j/jqgbk1bht.css';
import '../../css/m/mw49tabgd.css';
import '../../css/t/txqs6ybzt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="i0m2c7h4d"/><path class="jqgbk1bht"/><path class="mw49tabgd"/><path class="txqs6ybzt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:camera-reload"} {...others} />);
}

export default Component;
