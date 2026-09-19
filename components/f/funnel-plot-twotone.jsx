import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zacvbf9rr.css';
import '../../css/b/bex3sxi3x.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="zacvbf9rr"/><path class="bex3sxi3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:funnel-plot-twotone"} {...others} />);
}

export default Component;
