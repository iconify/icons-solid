import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kk-jv5d0o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kk-jv5d0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:money-dollar-box-fill"} {...others} />);
}

export default Component;
