import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k685z7nro.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="k685z7nro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:heart-with-greek-cross"} {...others} />);
}

export default Component;
