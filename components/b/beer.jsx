import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/psqiixwqa.css';
import '../../css/i/i5s4dnbbr.css';
import '../../css/s/snn11qb0s.css';
import '../../css/t/twdzmxv9o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="psqiixwqa"/><path class="i5s4dnbbr"/><path class="snn11qb0s"/><path class="twdzmxv9o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:beer"} {...others} />);
}

export default Component;
