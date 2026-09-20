import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vlkje40co.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vlkje40co"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:wheelchair-fill"} {...others} />);
}

export default Component;
