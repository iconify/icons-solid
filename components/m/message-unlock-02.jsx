import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bs4vhc4kh.css';
import '../../css/l/l-p5y3b-f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bs4vhc4kh"/><path class="l-p5y3b-f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-unlock-02"} {...others} />);
}

export default Component;
