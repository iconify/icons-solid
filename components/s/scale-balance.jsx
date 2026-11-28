import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hp7wiib7x.css';
import '../../css/r/rxzdi1bsc.css';
import '../../css/h/hbxtj8hnk.css';
import '../../css/j/jzx1htbjk.css';
import '../../css/a/aorqrfu5e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="hp7wiib7x"/><path class="rxzdi1bsc"/><path class="hbxtj8hnk"/><path class="jzx1htbjk"/><path class="aorqrfu5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:scale-balance"} {...others} />);
}

export default Component;
