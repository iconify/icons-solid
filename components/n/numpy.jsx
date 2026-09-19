import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d9r9x7bay.css';
import '../../css/y/y3q6sjb4w.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="d9r9x7bay"/><path class="y3q6sjb4w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:numpy"} {...others} />);
}

export default Component;
