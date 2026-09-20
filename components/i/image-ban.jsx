import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mndkq-2cu.css';
import '../../css/i/iz8c3l5-w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mndkq-2cu"/><path class="iz8c3l5-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:image-ban"} {...others} />);
}

export default Component;
