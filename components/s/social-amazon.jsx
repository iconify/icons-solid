import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dq3f4pbqc.css';
import '../../css/d/db3lwj71b.css';
import '../../css/y/yfqh42bcu.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="dq3f4pbqc"/><path class="db3lwj71b"/><path class="yfqh42bcu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:social-amazon"} {...others} />);
}

export default Component;
