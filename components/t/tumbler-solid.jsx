import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jpt93kz6q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jpt93kz6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:tumbler-solid"} {...others} />);
}

export default Component;
