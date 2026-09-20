import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eodsk58is.css';
import '../../css/y/ytrvn63uq.css';
import '../../css/y/ynumbwbdf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eodsk58is"/><path class="ytrvn63uq"/><path class="ynumbwbdf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ydf"} {...others} />);
}

export default Component;
