import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h6yug67vr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h6yug67vr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:file-contract-dollar"} {...others} />);
}

export default Component;
