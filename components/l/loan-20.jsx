import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nbd146bio.css';
import '../../css/o/os3zlpkkp.css';
import '../../css/k/kf8qud5kt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nbd146bio"/><path class="os3zlpkkp"/><path class="kf8qud5kt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:loan-20"} {...others} />);
}

export default Component;
