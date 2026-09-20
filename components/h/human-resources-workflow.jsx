import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tn0y2acyu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tn0y2acyu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:human-resources-workflow"} {...others} />);
}

export default Component;
