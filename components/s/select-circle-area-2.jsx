import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s-7ny1epj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s-7ny1epj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:select-circle-area-2"} {...others} />);
}

export default Component;
