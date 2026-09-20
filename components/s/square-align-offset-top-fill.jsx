import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jlv7qya0l.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jlv7qya0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-align-offset-top-fill"} {...others} />);
}

export default Component;
