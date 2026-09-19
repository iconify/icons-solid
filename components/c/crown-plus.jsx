import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/safu-vbjt.css';

const viewBox = {"width":1000,"height":1000};
const content = `<path class="safu-vbjt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontelico:crown-plus"} {...others} />);
}

export default Component;
