import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sjfal4j5x.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sjfal4j5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:toilet-man-flat"} {...others} />);
}

export default Component;
