import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t7gvf4b-z.css';

const viewBox = {"width":50,"height":50};
const content = `<path clip-rule="evenodd" class="t7gvf4b-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:sc-vk"} {...others} />);
}

export default Component;
