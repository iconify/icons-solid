import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vzgev3bud.css';
import '../../css/m/megg44b8h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vzgev3bud"/><path class="megg44b8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:xaur"} {...others} />);
}

export default Component;
