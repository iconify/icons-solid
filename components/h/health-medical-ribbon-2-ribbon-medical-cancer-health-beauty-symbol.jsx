import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mdyaibcnu.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="mdyaibcnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:health-medical-ribbon-2-ribbon-medical-cancer-health-beauty-symbol"} {...others} />);
}

export default Component;
