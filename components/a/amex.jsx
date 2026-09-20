import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bspjx2xhr.css';
import '../../css/x/xje7wbbbz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bspjx2xhr"/><path class="xje7wbbbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:amex"} {...others} />);
}

export default Component;
