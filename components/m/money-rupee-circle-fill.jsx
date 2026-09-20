import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hy-8mqb2f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hy-8mqb2f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:money-rupee-circle-fill"} {...others} />);
}

export default Component;
