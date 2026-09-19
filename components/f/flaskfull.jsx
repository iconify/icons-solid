import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vs_o25eyy.css';

const viewBox = {"width":1026,"height":1024};
const content = `<path class="vs_o25eyy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:flaskfull"} {...others} />);
}

export default Component;
