import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fctqu-jjk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fctqu-jjk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:test-tube-fill"} {...others} />);
}

export default Component;
