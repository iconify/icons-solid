import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/srbhv8gzm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="srbhv8gzm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:playstation-fill"} {...others} />);
}

export default Component;
