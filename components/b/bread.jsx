import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hf8-382-y.css';
import '../../css/c/c51exofjr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hf8-382-y"/><path class="c51exofjr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:bread"} {...others} />);
}

export default Component;
