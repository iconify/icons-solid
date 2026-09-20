import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/x/xi5wq3t8b.css';
import '../../css/h/hqodx2bjc.css';
import '../../css/x/xehwz-biw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><circle class="xi5wq3t8b"/><circle class="hqodx2bjc"/><path class="xehwz-biw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:question-duotone"} {...others} />);
}

export default Component;
