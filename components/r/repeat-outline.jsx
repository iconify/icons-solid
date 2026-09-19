import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kb9o4qvoo.css';
import '../../css/z/zfvyp8bow.css';
import '../../css/d/dw4cdfjco.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kb9o4qvoo"/><path class="zfvyp8bow"/><path class="dw4cdfjco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:repeat-outline"} {...others} />);
}

export default Component;
