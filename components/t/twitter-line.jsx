import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jpz6nsfpw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jpz6nsfpw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:twitter-line"} {...others} />);
}

export default Component;
