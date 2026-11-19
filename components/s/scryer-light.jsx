import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e-n048zgz.css';
import '../../css/h/hp98eyrqt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e-n048zgz"/><path class="hp98eyrqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:scryer-light"} {...others} />);
}

export default Component;
