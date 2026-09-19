import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/t/tcwe4ewrv.css';
import '../../css/w/wxzk5db5t.css';
import '../../css/a/arm5m9b8b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><circle class="tcwe4ewrv"/><path class="wxzk5db5t"/><path class="arm5m9b8b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:user-warning-02"} {...others} />);
}

export default Component;
