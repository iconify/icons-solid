import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tvof47lrw.css';
import '../../css/j/jtcikdbak.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="tvof47lrw"/><path class="jtcikdbak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:api-twotone"} {...others} />);
}

export default Component;
