import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j8kduccib.css';
import '../../css/j/jr633_uxg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j8kduccib"/><path class="jr633_uxg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:movr"} {...others} />);
}

export default Component;
