import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/q/q-eob553s.css';
import '../../css/o/oztyr0b6l.css';
import '../../css/o/obt5sdblw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="q-eob553s"/><path class="oztyr0b6l"/><path class="obt5sdblw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:filter-edit"} {...others} />);
}

export default Component;
