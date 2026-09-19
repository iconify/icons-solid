import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m17jfv7jg.css';

const viewBox = {"width":464,"height":480};
const content = `<path class="m17jfv7jg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:technorati"} {...others} />);
}

export default Component;
