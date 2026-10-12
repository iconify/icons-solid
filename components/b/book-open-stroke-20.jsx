import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ln0p78bsw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ln0p78bsw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:book-open-stroke-20"} {...others} />);
}

export default Component;
