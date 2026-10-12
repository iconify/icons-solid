import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cys6l9bkk.css';
import '../../css/s/sbfdibq2x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cys6l9bkk"/><path class="sbfdibq2x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:split"} {...others} />);
}

export default Component;
