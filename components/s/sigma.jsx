import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wlsti7bwm.css';
import '../../css/a/al-kcgb4q.css';
import '../../css/o/odm1sybxw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wlsti7bwm wm-shadow"/><path class="al-kcgb4q wm-k"/><path class="odm1sybxw wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:sigma"} {...others} />);
}

export default Component;
