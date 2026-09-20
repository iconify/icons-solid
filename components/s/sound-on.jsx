import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sbwm7p47f.css';
import '../../css/o/olyf9ubyh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sbwm7p47f"/><path class="olyf9ubyh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:sound-on"} {...others} />);
}

export default Component;
