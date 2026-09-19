import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc0__mb6y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bc0__mb6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:calendar-cancel"} {...others} />);
}

export default Component;
