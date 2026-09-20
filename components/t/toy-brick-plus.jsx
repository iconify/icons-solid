import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jbi_sysgh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jbi_sysgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:toy-brick-plus"} {...others} />);
}

export default Component;
