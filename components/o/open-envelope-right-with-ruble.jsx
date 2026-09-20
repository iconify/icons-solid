import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/emnnwqnyp.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="emnnwqnyp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:open-envelope-right-with-ruble"} {...others} />);
}

export default Component;
