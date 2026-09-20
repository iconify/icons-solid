import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/refi_ebwe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="refi_ebwe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:panel-bottom-open-sharp"} {...others} />);
}

export default Component;
