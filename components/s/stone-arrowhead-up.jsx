import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ez4kkvd4m.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ez4kkvd4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:stone-arrowhead-up"} {...others} />);
}

export default Component;
