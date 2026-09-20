import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tg-4g4b3z.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="tg-4g4b3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:work-order-abnormal-outline"} {...others} />);
}

export default Component;
