import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mv7hfmb3w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mv7hfmb3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:pie-chart-alt-2"} {...others} />);
}

export default Component;
