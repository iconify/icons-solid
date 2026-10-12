import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a1p82db_n.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="a1p82db_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:bubbles-fill-20"} {...others} />);
}

export default Component;
