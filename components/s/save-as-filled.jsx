import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/ssk1sbbui.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ssk1sbbui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:save-as-filled"} {...others} />);
}

export default Component;
