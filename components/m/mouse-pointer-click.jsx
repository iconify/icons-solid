import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6y3pjc9j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v6y3pjc9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:mouse-pointer-click"} {...others} />);
}

export default Component;
