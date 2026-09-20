import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v4-7eu8rv.css';
import '../../css/j/j8qutoidr.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="v4-7eu8rv"/><path class="j8qutoidr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:suspect"} {...others} />);
}

export default Component;
