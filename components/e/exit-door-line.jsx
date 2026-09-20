import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ak-hxv74i.css';
import '../../css/z/zzouz7bmm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ak-hxv74i"/><path class="zzouz7bmm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:exit-door-line"} {...others} />);
}

export default Component;
