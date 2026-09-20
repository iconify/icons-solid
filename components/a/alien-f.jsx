import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jhextp5nr.css';

const viewBox = {"width":24,"height":24,"left":-3,"top":-1.5};
const content = `<path class="jhextp5nr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:alien-f"} {...others} />);
}

export default Component;
