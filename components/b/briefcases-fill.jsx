import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p0a6y8b1l.css';
import '../../css/u/u407k86qy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="p0a6y8b1l"/><path class="u407k86qy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:briefcases-fill"} {...others} />);
}

export default Component;
