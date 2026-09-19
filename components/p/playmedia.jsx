import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sx2bsr38n.css';

const viewBox = {"width":717,"height":717};
const content = `<path class="sx2bsr38n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:playmedia"} {...others} />);
}

export default Component;
