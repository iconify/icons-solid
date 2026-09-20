import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bvod5yb-t.css';
import '../../css/t/t7j8-4uum.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bvod5yb-t"/><rect class="t7j8-4uum"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:copy"} {...others} />);
}

export default Component;
