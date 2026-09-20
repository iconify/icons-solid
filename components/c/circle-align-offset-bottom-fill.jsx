import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nl9d6f0ug.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nl9d6f0ug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-align-offset-bottom-fill"} {...others} />);
}

export default Component;
