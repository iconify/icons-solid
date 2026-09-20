import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/roh8lacsx.css';
import '../../css/c/cd-p8trqt.css';
import '../../css/v/vi194-b2e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="roh8lacsx"/><path class="cd-p8trqt"/><path class="vi194-b2e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:coding-apps-website-apps-browser"} {...others} />);
}

export default Component;
