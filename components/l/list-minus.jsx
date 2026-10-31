import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/z-2lqzb9t.css';
import '../../css/p/p06yvsb3o.css';
import '../../css/g/gz5pek7bp.css';
import '../../css/u/ubd7mtuee.css';
import '../../css/k/k6ldmkbnn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow z-2lqzb9t"/><path class="p06yvsb3o wm-shadow"/><path class="gz5pek7bp"/><path class="ubd7mtuee"/><path class="k6ldmkbnn wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:list-minus"} {...others} />);
}

export default Component;
