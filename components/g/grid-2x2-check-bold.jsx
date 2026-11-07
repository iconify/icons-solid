import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j9h01f9wo.css';
import '../../css/o/o7wz-inek.css';
import '../../css/b/bvct38blc.css';
import '../../css/a/abgizhdkn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j9h01f9wo"/><path class="o7wz-inek"/><path class="bvct38blc"/><path class="abgizhdkn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:grid-2x2-check-bold"} {...others} />);
}

export default Component;
