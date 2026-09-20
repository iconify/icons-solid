import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jxrr_ccra.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jxrr_ccra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:presence-exit"} {...others} />);
}

export default Component;
