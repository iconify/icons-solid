import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/z/z61wt6vzm.css';
import '../../css/f/f7vj_fblh.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="z61wt6vzm"/><circle class="f7vj_fblh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:gbyte"} {...others} />);
}

export default Component;
