import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m3ikzu8te.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="m3ikzu8te"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:cloud-x-mark-20-solid"} {...others} />);
}

export default Component;
