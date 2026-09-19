import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xo3vzdbsx.css';

const viewBox = {"width":770,"height":1024};
const content = `<path class="xo3vzdbsx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:placedelete"} {...others} />);
}

export default Component;
