import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mv3iph2kk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mv3iph2kk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:visual-paradigm"} {...others} />);
}

export default Component;
