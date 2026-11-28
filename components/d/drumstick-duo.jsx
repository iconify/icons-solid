import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v99-kxb3s.css';
import '../../css/j/j0jt8n8se.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary v99-kxb3s"/><path class="j0jt8n8se primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:drumstick-duo"} {...others} />);
}

export default Component;
