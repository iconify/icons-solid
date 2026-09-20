import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zimqkib2m.css';
import '../../css/y/y1jfbyb0b.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="zimqkib2m"/><path class="y1jfbyb0b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:magnifier"} {...others} />);
}

export default Component;
