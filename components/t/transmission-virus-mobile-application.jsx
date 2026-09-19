import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pq9ajpm0f.css';
import '../../css/n/ndda-4-on.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pq9ajpm0f"/><path class="ndda-4-on"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:transmission-virus-mobile-application"} {...others} />);
}

export default Component;
