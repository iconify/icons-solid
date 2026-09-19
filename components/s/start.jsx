import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jj90reb4p.css';
import '../../css/c/con0wjbli.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="jj90reb4p"/><path class="con0wjbli"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:start"} {...others} />);
}

export default Component;
