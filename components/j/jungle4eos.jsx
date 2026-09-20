import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7m2gubse.css';
import '../../css/o/ocdt_ibwk.css';
import '../../css/h/hz83yxben.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g7m2gubse"/><path class="ocdt_ibwk"/><path class="hz83yxben"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:jungle4eos"} {...others} />);
}

export default Component;
