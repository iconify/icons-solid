import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yph0dvbon.css';
import '../../css/x/xezngbb0n.css';
import '../../css/g/gny111bnl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yph0dvbon"/><path class="xezngbb0n"/><path class="gny111bnl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-pump-water-48"} {...others} />);
}

export default Component;
