import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tehthnb6g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tehthnb6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:t-shirt-fill"} {...others} />);
}

export default Component;
