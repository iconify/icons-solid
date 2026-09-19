import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/a/ab055nbuo.css';
import '../../css/e/esf9b4b3g.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="ab055nbuo"/><path class="esf9b4b3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:prl"} {...others} />);
}

export default Component;
