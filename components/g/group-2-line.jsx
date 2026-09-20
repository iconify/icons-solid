import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aclqr6c9v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aclqr6c9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:group-2-line"} {...others} />);
}

export default Component;
