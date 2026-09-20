import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dx4-jk-hn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dx4-jk-hn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:arrow-up-long-fill"} {...others} />);
}

export default Component;
