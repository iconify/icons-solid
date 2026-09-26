import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k65hgkb4u.css';
import '../../css/g/gsvz4o5yr.css';
import '../../css/l/lq7l02bvw.css';
import '../../css/d/d15wbrb2w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k65hgkb4u"/><path class="gsvz4o5yr"/><path class="lq7l02bvw"/><path class="d15wbrb2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chevrons-right-left-broken"} {...others} />);
}

export default Component;
