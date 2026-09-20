import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j779_gb8f.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-3};
const content = `<path class="j779_gb8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:pause"} {...others} />);
}

export default Component;
