import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e9clmdbve.css';
import '../../css/s/sqjarqpey.css';
import '../../css/m/mvpyig48m.css';
import '../../css/y/yl32yprqp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="e9clmdbve"/><path class="sqjarqpey"/><rect class="mvpyig48m"/><path class="yl32yprqp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:door-box"} {...others} />);
}

export default Component;
