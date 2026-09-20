import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vws14mbpw.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="vws14mbpw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:arrow-top-right-from-square-outline"} {...others} />);
}

export default Component;
