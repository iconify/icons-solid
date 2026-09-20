import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x9th1mpie.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="x9th1mpie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:percent-filled"} {...others} />);
}

export default Component;
