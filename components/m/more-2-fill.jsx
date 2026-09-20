import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hj9e8_bzv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hj9e8_bzv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:more-2-fill"} {...others} />);
}

export default Component;
