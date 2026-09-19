import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/acpw8s-ch.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="acpw8s-ch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:sustainable-energy"} {...others} />);
}

export default Component;
