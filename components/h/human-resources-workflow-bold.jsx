import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gw2n-_wlj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gw2n-_wlj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:human-resources-workflow-bold"} {...others} />);
}

export default Component;
