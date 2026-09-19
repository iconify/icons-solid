import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vjwkrkz2v.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="vjwkrkz2v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:arrow-left-right-square-fill"} {...others} />);
}

export default Component;
