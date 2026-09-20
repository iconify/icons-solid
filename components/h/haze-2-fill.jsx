import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zm2l9yb_n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zm2l9yb_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:haze-2-fill"} {...others} />);
}

export default Component;
