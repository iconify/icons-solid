import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7hydcubz.css';
import '../../css/y/y65flgbol.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="g7hydcubz"/><path class="y65flgbol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:remove-1d"} {...others} />);
}

export default Component;
