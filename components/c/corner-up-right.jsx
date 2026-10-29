import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i2mipc64l.css';
import '../../css/w/wu15jl49y.css';
import '../../css/p/plqpw7u-l.css';
import '../../css/c/c94cknbyx.css';
import '../../css/z/zit47_b4j.css';
import '../../css/o/o3scw9fev.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i2mipc64l wm-k"/><path class="wm-k wu15jl49y"/><path class="plqpw7u-l wm-k"/><path class="c94cknbyx wm-a"/><path class="wm-a zit47_b4j"/><path class="o3scw9fev wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:corner-up-right"} {...others} />);
}

export default Component;
