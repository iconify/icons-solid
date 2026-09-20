import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkeom7bum.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jkeom7bum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:expand-diagonal-fill"} {...others} />);
}

export default Component;
