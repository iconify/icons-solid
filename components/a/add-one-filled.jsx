import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezm5o3bwi.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ezm5o3bwi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:add-one-filled"} {...others} />);
}

export default Component;
