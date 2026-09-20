import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_dt9zbjx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r_dt9zbjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:chart-bar-big"} {...others} />);
}

export default Component;
