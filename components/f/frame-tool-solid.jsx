import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/okvwpgter.css';
import '../../css/i/ilcck20km.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="okvwpgter"/><path class="ilcck20km"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:frame-tool-solid"} {...others} />);
}

export default Component;
