import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a96_0cw9u.css';
import '../../css/u/u46pxbx6o.css';
import '../../css/l/lsr586-me.css';
import '../../css/l/lep3v53in.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="a96_0cw9u"/><path class="u46pxbx6o"/><path class="lsr586-me"/><path class="lep3v53in"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gravity-storage-20"} {...others} />);
}

export default Component;
