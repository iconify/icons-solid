import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gun8es9ig.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="gun8es9ig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:brightness-high-fill"} {...others} />);
}

export default Component;
