import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sq-n_37ce.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="sq-n_37ce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:text-underline"} {...others} />);
}

export default Component;
