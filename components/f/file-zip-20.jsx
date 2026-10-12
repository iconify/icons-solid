import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/szahujb-p.css';
import '../../css/r/rehf-ikcs.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="szahujb-p"/><path class="rehf-ikcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-zip-20"} {...others} />);
}

export default Component;
