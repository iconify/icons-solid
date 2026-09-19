import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/i0gdj8rcq.css';
import '../../css/b/bekcrac2g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="i0gdj8rcq"/><path class="bekcrac2g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:social-distancing-woman"} {...others} />);
}

export default Component;
