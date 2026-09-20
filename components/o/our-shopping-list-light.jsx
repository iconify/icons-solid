import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/age0dqe5d.css';
import '../../css/j/jz4ibqfjc.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="age0dqe5d"/><path class="jz4ibqfjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:our-shopping-list-light"} {...others} />);
}

export default Component;
