import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o_3k-myyj.css';
import '../../css/i/i1nctz7rt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o_3k-myyj"/><path class="i1nctz7rt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:pie-chart-1"} {...others} />);
}

export default Component;
