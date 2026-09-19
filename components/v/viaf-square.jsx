import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ofmkj9b5m.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="ofmkj9b5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"academicons:viaf-square"} {...others} />);
}

export default Component;
