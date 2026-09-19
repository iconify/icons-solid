import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gl8vzkbjj.css';

const viewBox = {"width":27,"height":24};
const content = `<path class="gl8vzkbjj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:venus-mars"} {...others} />);
}

export default Component;
