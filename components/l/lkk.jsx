import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/m/maiy0chzl.css';
import '../../css/b/b4fqxz28o.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="maiy0chzl"/><path class="b4fqxz28o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:lkk"} {...others} />);
}

export default Component;
