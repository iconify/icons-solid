import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gav6n2baw.css';
import '../../css/b/bl21z0b4f.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="gav6n2baw"/><path class="bl21z0b4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:alert"} {...others} />);
}

export default Component;
