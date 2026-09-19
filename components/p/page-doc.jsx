import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fd4fpfb_f.css';
import '../../css/b/b337xtreo.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="fd4fpfb_f"/><path class="b337xtreo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:page-doc"} {...others} />);
}

export default Component;
