import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b7i4hjbdg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b7i4hjbdg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:patreon-fill"} {...others} />);
}

export default Component;
