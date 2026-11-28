import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wijcs633j.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hh22nib_t.css';
import '../../css/z/zw4p_s46b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary wijcs633j"/><g class="dt0cm9dhy primary"><path class="hh22nib_t"/><path class="zw4p_s46b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:banana-duo"} {...others} />);
}

export default Component;
