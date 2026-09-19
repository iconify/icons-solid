import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tsx0ls6vz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tsx0ls6vz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:expand-left-and-right"} {...others} />);
}

export default Component;
