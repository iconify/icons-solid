import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/g6y04tvey.css';
import '../../css/h/heknmubqx.css';
import '../../css/v/vyz1xubip.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="g6y04tvey"/><path class="heknmubqx"/><path class="vyz1xubip"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bag-tick2"} {...others} />);
}

export default Component;
