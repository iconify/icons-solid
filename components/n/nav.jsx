import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fkc5y8bld.css';
import '../../css/s/sm-l9ob0x.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="fkc5y8bld"/><path class="sm-l9ob0x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:nav"} {...others} />);
}

export default Component;
