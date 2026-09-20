import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m9huq1jph.css';
import '../../css/a/auhfmn4jd.css';
import '../../css/x/xsr2o7bxe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="m9huq1jph"/><path class="auhfmn4jd"/><path class="xsr2o7bxe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:laptop4-duotone"} {...others} />);
}

export default Component;
