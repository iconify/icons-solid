import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zip9yv1tu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zip9yv1tu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:fire-line"} {...others} />);
}

export default Component;
