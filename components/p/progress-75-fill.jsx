import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k6njk97az.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k6njk97az"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:progress-75-fill"} {...others} />);
}

export default Component;
