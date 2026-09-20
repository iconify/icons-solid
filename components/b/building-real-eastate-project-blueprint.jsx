import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qv9g0wfdr.css';
import '../../css/l/la_1b_col.css';
import '../../css/u/u694-wbic.css';
import '../../css/x/xucop8h-e.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qv9g0wfdr"/><path class="la_1b_col"/><path class="u694-wbic"/><path class="xucop8h-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:building-real-eastate-project-blueprint"} {...others} />);
}

export default Component;
