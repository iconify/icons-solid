import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/d/deus58iom.css';
import '../../css/w/w-d57vb8f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="deus58iom"/><path class="w-d57vb8f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:badge-light"} {...others} />);
}

export default Component;
