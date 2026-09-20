import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fs5cgacrv.css';
import '../../css/o/o28durbsd.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="fs5cgacrv"/><path class="o28durbsd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:copy-16"} {...others} />);
}

export default Component;
