import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nh6bq8bza.css';
import '../../css/l/l4sqs0dnz.css';
import '../../css/b/ba-heypaf.css';
import '../../css/z/zwi0ylbnr.css';
import '../../css/z/zrgnlznvj.css';
import '../../css/u/u7tit5x5m.css';
import '../../css/k/kabonubtr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nh6bq8bza"/><path class="l4sqs0dnz"/><path class="ba-heypaf"/><path class="zwi0ylbnr"/><path class="zrgnlznvj"/><path class="u7tit5x5m"/><path clip-rule="evenodd" class="kabonubtr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:shield-network-bold"} {...others} />);
}

export default Component;
