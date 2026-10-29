import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zs5l9tbhg.css';
import '../../css/y/ys0s8unky.css';
import '../../css/a/as9i7h0ds.css';
import '../../css/f/fqeyirbjk.css';
import '../../css/z/z6463wkhg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow zs5l9tbhg"/><path class="wm-k ys0s8unky"/><path class="as9i7h0ds wm-k"/><path class="fqeyirbjk wm-s"/><path class="wm-s z6463wkhg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:list-minus"} {...others} />);
}

export default Component;
