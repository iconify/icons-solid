import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gvl4myhbs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gvl4myhbs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:sprout-fill-round"} {...others} />);
}

export default Component;
