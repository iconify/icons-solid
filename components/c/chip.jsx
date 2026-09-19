import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/b8uij2b6n.css';
import '../../css/v/v6qg3zuvy.css';
import '../../css/g/gn6dmkbcd.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><rect class="b8uij2b6n"/><rect class="v6qg3zuvy"/><path class="gn6dmkbcd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:chip"} {...others} />);
}

export default Component;
