import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/crzvukbzq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="crzvukbzq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:rotate-cw-duotone"} {...others} />);
}

export default Component;
