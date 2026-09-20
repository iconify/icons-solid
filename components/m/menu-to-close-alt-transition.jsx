import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/s/s3q1-f.css';
import '../../css/j/jdu_bz.css';
import '../../css/d/d-1kwl8z.css';
import '../../css/d/d-aqgbfy.css';
import '../../css/f/fade-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c s3q1-f"/><path class="a0m25c jdu_bz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:menu-to-close-alt-transition"} {...others} />);
}

export default Component;
