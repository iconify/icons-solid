import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oni9b4b9x.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="oni9b4b9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:label-filled"} {...others} />);
}

export default Component;
