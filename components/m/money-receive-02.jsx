import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pgjt86b_x.css';
import '../../css/j/j-xixqece.css';
import '../../css/c/cbn7vebrq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pgjt86b_x"/><path class="j-xixqece"/><path class="cbn7vebrq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:money-receive-02"} {...others} />);
}

export default Component;
