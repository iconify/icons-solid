import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kz3x3j04d.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="kz3x3j04d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:circle-more-filled"} {...others} />);
}

export default Component;
