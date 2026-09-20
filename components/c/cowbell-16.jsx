import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sb6u6tbuf.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="sb6u6tbuf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:cowbell-16"} {...others} />);
}

export default Component;
