import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6m59nb7p.css';
import '../../css/y/yyfpz7bxh.css';
import '../../css/o/oiejv2yqa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f6m59nb7p"/><path class="yyfpz7bxh"/><path class="oiejv2yqa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:file-doc"} {...others} />);
}

export default Component;
