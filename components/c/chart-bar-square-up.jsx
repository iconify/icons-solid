import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hhng6tn2x.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hhng6tn2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:chart-bar-square-up"} {...others} />);
}

export default Component;
