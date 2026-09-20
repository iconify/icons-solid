import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o8eain-5f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o8eain-5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:video-minus-outline"} {...others} />);
}

export default Component;
