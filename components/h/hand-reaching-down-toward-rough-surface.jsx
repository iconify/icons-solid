import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f2u2mlbug.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="f2u2mlbug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:hand-reaching-down-toward-rough-surface"} {...others} />);
}

export default Component;
