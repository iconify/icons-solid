import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pztiz2epx.css';
import '../../css/u/ur-nm2blr.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="pztiz2epx"/><path class="ur-nm2blr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:git-pull-request-unlisted-16"} {...others} />);
}

export default Component;
