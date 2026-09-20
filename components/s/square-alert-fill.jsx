import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y69tapb3z.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="y69tapb3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-alert-fill"} {...others} />);
}

export default Component;
