import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u7__hwxfb.css';
import '../../css/f/fo40zs72w.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="u7__hwxfb"/><path class="fo40zs72w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:mobile-check"} {...others} />);
}

export default Component;
