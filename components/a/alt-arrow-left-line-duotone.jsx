import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/b7u6q5tnf.css';
import '../../css/b/b1_tb3awx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="b7u6q5tnf"/><path class="b1_tb3awx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:alt-arrow-left-line-duotone"} {...others} />);
}

export default Component;
