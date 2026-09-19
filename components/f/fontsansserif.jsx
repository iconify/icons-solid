import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oplz0d5gv.css';

const viewBox = {"width":832,"height":1024};
const content = `<path class="oplz0d5gv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:fontsansserif"} {...others} />);
}

export default Component;
