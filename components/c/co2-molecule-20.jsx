import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x64tqdbkh.css';
import '../../css/g/gr4zytbch.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="x64tqdbkh"/><path class="gr4zytbch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:co2-molecule-20"} {...others} />);
}

export default Component;
