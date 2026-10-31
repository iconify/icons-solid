import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aemn-9ejj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aemn-9ejj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:fast-forward-fill-round"} {...others} />);
}

export default Component;
