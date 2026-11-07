import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vm6ivcctg.css';
import '../../css/e/em_q5npjq.css';
import '../../css/s/sma5kmzjd.css';
import '../../css/x/xo9chq19z.css';
import '../../css/s/six-1nb9x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="vm6ivcctg"/><path class="em_q5npjq"/><path class="sma5kmzjd"/><circle class="xo9chq19z"/><path class="six-1nb9x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:columns-3-cog-linear"} {...others} />);
}

export default Component;
