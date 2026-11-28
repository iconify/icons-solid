import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kinr2bcxv.css';
import '../../css/o/o6ht1ib0e.css';
import '../../css/o/ov-gx2brx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="kinr2bcxv"/><path class="o6ht1ib0e"/><path class="ov-gx2brx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:text-quote"} {...others} />);
}

export default Component;
