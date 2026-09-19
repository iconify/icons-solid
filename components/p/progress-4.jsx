import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x2g91qadi.css';

const viewBox = {"width":1000,"height":1000};
const content = `<path class="x2g91qadi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"websymbol:progress-4"} {...others} />);
}

export default Component;
