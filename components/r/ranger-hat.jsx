import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tec9y_bhm.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="tec9y_bhm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:ranger-hat"} {...others} />);
}

export default Component;
