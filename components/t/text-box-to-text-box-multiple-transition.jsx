import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/c/cklvww.css';
import '../../css/z/znzwrv.css';
import '../../css/d/d-3gok0n.css';
import '../../css/d/d-5rxztz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c cklvww"/><path class="a0m25c znzwrv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:text-box-to-text-box-multiple-transition"} {...others} />);
}

export default Component;
