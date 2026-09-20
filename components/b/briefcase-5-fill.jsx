import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ibf9d8bse.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ibf9d8bse"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:briefcase-5-fill"} {...others} />);
}

export default Component;
