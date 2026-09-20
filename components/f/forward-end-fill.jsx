import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kja92kcsg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kja92kcsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:forward-end-fill"} {...others} />);
}

export default Component;
