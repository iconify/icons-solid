import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qxv_pcivz.css';
import '../../css/c/clqjdubcg.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qxv_pcivz"/><path class="clqjdubcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:direct-link"} {...others} />);
}

export default Component;
