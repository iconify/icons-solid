import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/a/a0sguvbwp.css';
import '../../css/l/lq5smqilw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="a0sguvbwp"/><path class="lq5smqilw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:tree"} {...others} />);
}

export default Component;
