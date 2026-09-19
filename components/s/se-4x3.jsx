import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aw_qod65h.css';
import '../../css/h/hyjd_db4w.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="aw_qod65h"/><path class="hyjd_db4w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:se-4x3"} {...others} />);
}

export default Component;
