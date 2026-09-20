import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pdvrx72kk.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="pdvrx72kk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:coffee-mug-with-steam"} {...others} />);
}

export default Component;
