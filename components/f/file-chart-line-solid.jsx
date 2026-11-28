import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bzssj_eru.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bzssj_eru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:file-chart-line-solid"} {...others} />);
}

export default Component;
