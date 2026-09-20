import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vspa-mbhv.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="vspa-mbhv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-arrows-vertical-expand-1-move-expand-vertical"} {...others} />);
}

export default Component;
