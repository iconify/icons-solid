import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/emlsrnxct.css';
import '../../css/w/w80nymbio.css';
import '../../css/i/io7sfnrdz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="emlsrnxct"/><path class="w80nymbio"/><path class="io7sfnrdz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:factory-emissions-20"} {...others} />);
}

export default Component;
