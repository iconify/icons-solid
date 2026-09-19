import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-5ogob0g.css';
import '../../css/i/il_nhwj0r.css';
import '../../css/d/dh0pfppzw.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="q-5ogob0g"/><path class="il_nhwj0r"/><path class="dh0pfppzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:sanity"} {...others} />);
}

export default Component;
