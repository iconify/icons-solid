import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/diz9d_b0q.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="diz9d_b0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:jigsaw-puzzle-piece"} {...others} />);
}

export default Component;
