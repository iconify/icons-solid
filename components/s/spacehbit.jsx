import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xkmhv9b-n.css';
import '../../css/g/g-9hgrbem.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="xkmhv9b-n"/><path class="g-9hgrbem"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:spacehbit"} {...others} />);
}

export default Component;
