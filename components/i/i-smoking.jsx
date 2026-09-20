import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f635f9k-l.css';
import '../../css/b/bx7cagbuz.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="f635f9k-l"/><path class="bx7cagbuz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-smoking"} {...others} />);
}

export default Component;
