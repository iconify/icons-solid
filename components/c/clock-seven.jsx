import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/too40e6yy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="too40e6yy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:clock-seven"} {...others} />);
}

export default Component;
