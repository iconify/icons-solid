import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yplq3altk.css';
import '../../css/l/lv5vqbcpw.css';
import '../../css/y/yltxbdb9x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yplq3altk"/><path class="lv5vqbcpw"/><path class="yltxbdb9x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:saving-bank-international"} {...others} />);
}

export default Component;
