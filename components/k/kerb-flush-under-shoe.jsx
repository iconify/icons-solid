import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nx0w5hfep.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="nx0w5hfep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:kerb-flush-under-shoe"} {...others} />);
}

export default Component;
