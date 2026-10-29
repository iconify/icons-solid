import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ig7r6rpsg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ig7r6rpsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:stop-solid"} {...others} />);
}

export default Component;
