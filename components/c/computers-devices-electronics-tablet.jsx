import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/epcos0d9j.css';
import '../../css/o/ocymuzb7a.css';
import '../../css/x/x6uuzdbii.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="epcos0d9j"/><path class="ocymuzb7a"/><path class="x6uuzdbii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:computers-devices-electronics-tablet"} {...others} />);
}

export default Component;
