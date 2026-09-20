import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ffpxg9b_p.css';
import '../../css/b/b-p4_2b_w.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ffpxg9b_p"/><path class="b-p4_2b_w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:robot"} {...others} />);
}

export default Component;
