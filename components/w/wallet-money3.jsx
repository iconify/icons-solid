import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v462x1hwk.css';
import '../../css/j/jxnqx5b6v.css';
import '../../css/f/f23vbgbyi.css';
import '../../css/u/u9ecq3b1a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v462x1hwk"/><path class="jxnqx5b6v"/><path class="f23vbgbyi"/><path class="u9ecq3b1a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:wallet-money3"} {...others} />);
}

export default Component;
