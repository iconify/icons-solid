import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r-89fbcca.css';
import '../../css/e/eg3hw6b_q.css';
import '../../css/d/d3bu2f_4i.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="r-89fbcca"/><path class="eg3hw6b_q"/><path class="d3bu2f_4i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:cloud-server"} {...others} />);
}

export default Component;
