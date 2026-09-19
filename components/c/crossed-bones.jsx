import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_fdr6xmr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c_fdr6xmr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:crossed-bones"} {...others} />);
}

export default Component;
