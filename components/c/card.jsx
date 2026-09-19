import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pwrjgzgiy.css';

const viewBox = {"width":750,"height":750};
const content = `<path class="pwrjgzgiy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"il:card"} {...others} />);
}

export default Component;
