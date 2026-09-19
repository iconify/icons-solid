import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ug-mjlbkx.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ug-mjlbkx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:diagram-3"} {...others} />);
}

export default Component;
