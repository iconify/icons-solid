import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/h/h2peg3blj.css';
import '../../css/a/a-j9obb4j.css';
import '../../css/t/tyqi67ijp.css';
import '../../css/r/rj25issda.css';
import '../../css/k/ko2uz_bqq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="h2peg3blj"/><path class="a-j9obb4j"/><path class="tyqi67ijp"/><path class="rj25issda"/><path class="ko2uz_bqq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:wrench"} {...others} />);
}

export default Component;
