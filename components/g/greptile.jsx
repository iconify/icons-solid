import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wfkt53w_x.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wfkt53w_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:greptile"} {...others} />);
}

export default Component;
