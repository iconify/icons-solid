import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l6t7pi2ud.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="l6t7pi2ud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:setting-alt-fill"} {...others} />);
}

export default Component;
