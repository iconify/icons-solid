import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/oy25b4b6n.css';
import '../../css/o/oh2j-sh1u.css';
import '../../css/m/mv0xhtmbi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="oy25b4b6n"/><path class="oh2j-sh1u"/><path class="mv0xhtmbi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:layers-stacked"} {...others} />);
}

export default Component;
