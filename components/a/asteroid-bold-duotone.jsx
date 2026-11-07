import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hfr3lgz9t.css';
import '../../css/x/xtajaob6f.css';
import '../../css/k/k5ombdfvg.css';
import '../../css/c/c-0ykybsp.css';
import '../../css/g/gofzjeb0k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hfr3lgz9t"/><path class="xtajaob6f"/><path class="k5ombdfvg"/><path class="c-0ykybsp"/><path class="gofzjeb0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:asteroid-bold-duotone"} {...others} />);
}

export default Component;
