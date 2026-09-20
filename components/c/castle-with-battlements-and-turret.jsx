import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nvfqrdebp.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="nvfqrdebp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:castle-with-battlements-and-turret"} {...others} />);
}

export default Component;
