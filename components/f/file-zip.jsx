import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mwmdc8b7j.css';
import '../../css/y/y5nzee3jx.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mwmdc8b7j"/><path class="y5nzee3jx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:file-zip"} {...others} />);
}

export default Component;
