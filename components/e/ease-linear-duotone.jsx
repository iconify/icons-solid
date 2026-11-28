import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ggcg5cysm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ggcg5cysm primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ease-linear-duotone"} {...others} />);
}

export default Component;
