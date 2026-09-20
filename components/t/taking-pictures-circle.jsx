import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fgoay3b5b.css';
import '../../css/r/r9cdxubdv.css';
import '../../css/s/sm4hol1wi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fgoay3b5b"/><path class="r9cdxubdv"/><path class="sm4hol1wi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:taking-pictures-circle"} {...others} />);
}

export default Component;
