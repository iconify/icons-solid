import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sn_x7fxrw.css';
import '../../css/h/hozw9riwr.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="sn_x7fxrw"/><path class="hozw9riwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:plus-circle-16"} {...others} />);
}

export default Component;
