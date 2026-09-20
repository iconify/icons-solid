import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/esz_ho-hy.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="esz_ho-hy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:village-buildings"} {...others} />);
}

export default Component;
