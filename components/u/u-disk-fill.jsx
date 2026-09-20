import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/efh2cwtrz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="efh2cwtrz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:u-disk-fill"} {...others} />);
}

export default Component;
