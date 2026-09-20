import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mou012obv.css';
import '../../css/o/ozw-6jbhh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mou012obv"/><path class="ozw-6jbhh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:shuffle-16"} {...others} />);
}

export default Component;
