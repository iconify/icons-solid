import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rd8b6f9us.css';
import '../../css/i/iwg23acuw.css';
import '../../css/m/muqve3b3v.css';
import '../../css/j/jstusf5pk.css';

const viewBox = {"width":32,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="rd8b6f9us"/><path class="iwg23acuw"/><path class="muqve3b3v"/><path class="jstusf5pk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:mm"} {...others} />);
}

export default Component;
