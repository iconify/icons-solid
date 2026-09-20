import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ftupilb-m.css';
import '../../css/l/lgcy8m5fs.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ftupilb-m"/><path class="lgcy8m5fs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:call-out-16"} {...others} />);
}

export default Component;
