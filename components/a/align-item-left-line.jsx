import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/shjd7ebvp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="shjd7ebvp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:align-item-left-line"} {...others} />);
}

export default Component;
