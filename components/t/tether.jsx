import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/or-9fcc4e.css';
import '../../css/t/tsrj5epuh.css';

const viewBox = {"width":339.43,"height":295.27};
const content = `<path class="or-9fcc4e"/><path class="tsrj5epuh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:tether"} {...others} />);
}

export default Component;
