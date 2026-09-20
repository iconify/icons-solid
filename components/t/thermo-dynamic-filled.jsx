import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ch_ylrb6q.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ch_ylrb6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:thermo-dynamic-filled"} {...others} />);
}

export default Component;
