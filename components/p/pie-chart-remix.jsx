import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hh6_xb39i.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hh6_xb39i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:pie-chart-remix"} {...others} />);
}

export default Component;
