import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-5sx6b5a.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="d-5sx6b5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:pumpjack"} {...others} />);
}

export default Component;
