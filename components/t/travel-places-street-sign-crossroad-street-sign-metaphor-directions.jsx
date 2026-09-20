import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fngc6jfhu.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="fngc6jfhu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:travel-places-street-sign-crossroad-street-sign-metaphor-directions"} {...others} />);
}

export default Component;
