import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rroqv4b5b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rroqv4b5b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-question-sharp-fill"} {...others} />);
}

export default Component;
