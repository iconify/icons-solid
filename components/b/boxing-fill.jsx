import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ug3bg7b3m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ug3bg7b3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:boxing-fill"} {...others} />);
}

export default Component;
