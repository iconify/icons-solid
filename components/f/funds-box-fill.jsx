import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/auy9bfb_f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="auy9bfb_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:funds-box-fill"} {...others} />);
}

export default Component;
