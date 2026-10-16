import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lw19-5bkm.css';
import '../../css/f/fv9h6ebsv.css';
import '../../css/r/r05k69bmo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lw19-5bkm"/><path class="fv9h6ebsv"/><path class="r05k69bmo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:folder-input-48-bold"} {...others} />);
}

export default Component;
