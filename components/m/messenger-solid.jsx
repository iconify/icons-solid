import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bj98w8b9c.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="bj98w8b9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:messenger-solid"} {...others} />);
}

export default Component;
