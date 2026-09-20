import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/econho.css';
import '../../css/i/iw1iew.css';
import '../../css/b/b92-iz.css';
import '../../css/d/d-3gok0n.css';
import '../../css/d/d-5rxztz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="econho iw1iew"/><path class="b92-iz iw1iew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:text-box-twotone-to-text-box-multiple-twotone-transition"} {...others} />);
}

export default Component;
