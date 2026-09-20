import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pt9skmbar.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="pt9skmbar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:p-wide-under-roof"} {...others} />);
}

export default Component;
