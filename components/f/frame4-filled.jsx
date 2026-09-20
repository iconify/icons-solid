import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/on0f48l7q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="on0f48l7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:frame4-filled"} {...others} />);
}

export default Component;
