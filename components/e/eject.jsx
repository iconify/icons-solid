import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a8gc-8b-e.css';

const viewBox = {"width":24,"height":24,"left":-3,"top":-3};
const content = `<path class="a8gc-8b-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:eject"} {...others} />);
}

export default Component;
