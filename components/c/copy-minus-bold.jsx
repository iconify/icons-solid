import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ry6677b8a.css';
import '../../css/n/nazq8_bnr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ry6677b8a"/><path class="nazq8_bnr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:copy-minus-bold"} {...others} />);
}

export default Component;
