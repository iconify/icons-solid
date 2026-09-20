import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/powdozs3e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="powdozs3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:human-resources-hierarchy-1-bold"} {...others} />);
}

export default Component;
