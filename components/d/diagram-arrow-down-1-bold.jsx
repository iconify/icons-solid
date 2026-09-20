import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u1c916b-g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u1c916b-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:diagram-arrow-down-1-bold"} {...others} />);
}

export default Component;
