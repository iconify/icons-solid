import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lfhs4vv5g.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="lfhs4vv5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:pause-circle-fill"} {...others} />);
}

export default Component;
