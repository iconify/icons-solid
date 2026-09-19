import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rr6xv7y8g.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="rr6xv7y8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:git-fork"} {...others} />);
}

export default Component;
