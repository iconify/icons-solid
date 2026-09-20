import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f8be_q3jj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f8be_q3jj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:knife-fill"} {...others} />);
}

export default Component;
