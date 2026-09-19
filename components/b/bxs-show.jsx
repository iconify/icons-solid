import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vza3v5bem.css';
import '../../css/c/cxpp0lxyr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vza3v5bem"/><path class="cxpp0lxyr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-show"} {...others} />);
}

export default Component;
