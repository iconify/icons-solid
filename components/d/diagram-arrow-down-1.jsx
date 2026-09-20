import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e709i7b-v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e709i7b-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:diagram-arrow-down-1"} {...others} />);
}

export default Component;
