import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gxson9i6w.css';
import '../../css/o/onj4yibdv.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="gxson9i6w"/><path class="onj4yibdv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:waves"} {...others} />);
}

export default Component;
