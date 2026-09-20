import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rj-o9e.css';
import '../../css/a/a0m25c.css';
import '../../css/r/rmjj0t.css';
import '../../css/y/yqwu-f.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-from-30.css';
import '../../css/s/so-from-16.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rj-o9e"/><path class="a0m25c rmjj0t"/><path class="a0m25c yqwu-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:heart-half-filled"} {...others} />);
}

export default Component;
