import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dnzeedbwl.css';
import '../../css/s/s1c9mbcsk.css';
import '../../css/k/kcqns6e2b.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-solid clr-i-solid-path-1 dnzeedbwl"/><path class="clr-i-solid clr-i-solid-path-2 s1c9mbcsk"/><path class="clr-i-solid clr-i-solid-path-3 kcqns6e2b"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:hourglass-solid"} {...others} />);
}

export default Component;
