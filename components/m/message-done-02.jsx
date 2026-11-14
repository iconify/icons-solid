import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zii_9sq2c.css';
import '../../css/n/ni1-dcbmj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zii_9sq2c"/><path class="ni1-dcbmj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-done-02"} {...others} />);
}

export default Component;
