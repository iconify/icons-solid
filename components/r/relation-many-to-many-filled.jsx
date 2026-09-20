import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jy2zsfmxr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jy2zsfmxr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:relation-many-to-many-filled"} {...others} />);
}

export default Component;
