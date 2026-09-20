import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r70_bowor.css';
import '../../css/j/j73_9_mpf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r70_bowor"/><path class="j73_9_mpf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:image-arrow-up-light"} {...others} />);
}

export default Component;
