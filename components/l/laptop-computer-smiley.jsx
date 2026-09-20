import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qggk3jboh.css';
import '../../css/t/tkr_52btl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qggk3jboh"/><path class="tkr_52btl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:laptop-computer-smiley"} {...others} />);
}

export default Component;
