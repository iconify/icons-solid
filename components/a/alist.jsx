import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kh8cc2nme.css';
import '../../css/z/z6m2ovbsr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kh8cc2nme"/><path class="z6m2ovbsr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:alist"} {...others} />);
}

export default Component;
