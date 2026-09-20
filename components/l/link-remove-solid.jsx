import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hn29a_4bt.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="hn29a_4bt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:link-remove-solid"} {...others} />);
}

export default Component;
