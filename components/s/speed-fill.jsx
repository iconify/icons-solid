import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lvq-sy4sc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lvq-sy4sc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:speed-fill"} {...others} />);
}

export default Component;
