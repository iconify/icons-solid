import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jm8d_x7vj.css';
import '../../css/r/rdm-ltbjj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jm8d_x7vj"/><path class="rdm-ltbjj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:cloud-arrow-down-light"} {...others} />);
}

export default Component;
