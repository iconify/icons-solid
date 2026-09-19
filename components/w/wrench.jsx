import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bzyd7bckj.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="bzyd7bckj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:wrench"} {...others} />);
}

export default Component;
