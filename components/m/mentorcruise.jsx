import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ju9s5pbyu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ju9s5pbyu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:mentorcruise"} {...others} />);
}

export default Component;
