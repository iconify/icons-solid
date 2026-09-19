import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/btnqltagt.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="btnqltagt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:subtractshape"} {...others} />);
}

export default Component;
