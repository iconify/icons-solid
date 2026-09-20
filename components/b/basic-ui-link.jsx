import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r4k4l6b7c.css';
import '../../css/a/aa6fczbzd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="r4k4l6b7c"/><path class="aa6fczbzd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:basic-ui-link"} {...others} />);
}

export default Component;
