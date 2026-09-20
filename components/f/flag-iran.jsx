import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8cxt48ie.css';
import '../../css/q/q0ouhhhum.css';
import '../../css/r/r73utib8z.css';
import '../../css/m/m4a18dtgb.css';
import '../../css/o/oo9m_4btn.css';
import '../../css/d/d759ooqqy.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="e8cxt48ie"/><path class="q0ouhhhum"/><path class="r73utib8z"/><path class="m4a18dtgb"/><path class="oo9m_4btn"/><path class="d759ooqqy"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-iran"} {...others} />);
}

export default Component;
