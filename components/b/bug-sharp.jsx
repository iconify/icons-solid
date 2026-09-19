import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ebflwhkmy.css';
import '../../css/o/o98-wvvyw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ebflwhkmy"/><path class="o98-wvvyw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:bug-sharp"} {...others} />);
}

export default Component;
