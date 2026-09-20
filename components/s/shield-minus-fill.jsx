import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f_c3ofb3g.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="f_c3ofb3g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:shield-minus-fill"} {...others} />);
}

export default Component;
