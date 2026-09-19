import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k07n6zrtr.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="k07n6zrtr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:rectangle-grid-3x2"} {...others} />);
}

export default Component;
