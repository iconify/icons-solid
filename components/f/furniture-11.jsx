import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z01ndpwmx.css';
import '../../css/q/qvqjn5baw.css';

const viewBox = {"width":11,"height":11};
const content = `<path class="z01ndpwmx"/><path class="qvqjn5baw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:furniture-11"} {...others} />);
}

export default Component;
