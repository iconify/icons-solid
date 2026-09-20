import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/schfpoh5a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="schfpoh5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:cooldown-line"} {...others} />);
}

export default Component;
