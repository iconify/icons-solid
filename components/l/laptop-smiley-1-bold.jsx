import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ypwzazrln.css';
import '../../css/d/dr7uw4h1i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ypwzazrln"/><path class="dr7uw4h1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:laptop-smiley-1-bold"} {...others} />);
}

export default Component;
