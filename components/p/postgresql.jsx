import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iqkpc9b7p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iqkpc9b7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:postgresql"} {...others} />);
}

export default Component;
