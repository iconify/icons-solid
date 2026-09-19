import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/me8lomb-n.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="me8lomb-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:player-end-fill"} {...others} />);
}

export default Component;
