import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bigwdsbpk.css';
import '../../css/y/yjtz3ka2h.css';
import '../../css/h/h5bp3ks6u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bigwdsbpk"/><path class="yjtz3ka2h"/><path class="h5bp3ks6u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:image-rectangle"} {...others} />);
}

export default Component;
