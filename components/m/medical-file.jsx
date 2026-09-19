import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gv6nqrb6l.css';
import '../../css/x/x8-zh3bna.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gv6nqrb6l"/><path class="x8-zh3bna"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:medical-file"} {...others} />);
}

export default Component;
