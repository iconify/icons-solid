import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/avd0btb0l.css';

const viewBox = {"width":24,"height":24,"left":-3,"top":-2};
const content = `<path class="avd0btb0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:trash"} {...others} />);
}

export default Component;
