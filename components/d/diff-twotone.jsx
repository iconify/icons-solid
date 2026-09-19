import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d6atusy8s.css';
import '../../css/r/ra7jfzloj.css';
import '../../css/h/hcj3z71ba.css';
import '../../css/e/etst7gbhd.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="d6atusy8s"/><path class="ra7jfzloj"/><path class="hcj3z71ba"/><path class="etst7gbhd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:diff-twotone"} {...others} />);
}

export default Component;
