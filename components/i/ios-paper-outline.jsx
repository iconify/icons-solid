import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x8ruyacxf.css';
import '../../css/l/la4b0i5sl.css';
import '../../css/g/gx-o-jbfy.css';
import '../../css/b/b701h2wuj.css';
import '../../css/g/gb9s77bxd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x8ruyacxf"/><path class="la4b0i5sl"/><path class="gx-o-jbfy"/><path class="b701h2wuj"/><path class="gb9s77bxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-paper-outline"} {...others} />);
}

export default Component;
