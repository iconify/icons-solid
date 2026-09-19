import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f4tk_vyux.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="f4tk_vyux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:loadingseven"} {...others} />);
}

export default Component;
