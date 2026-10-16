import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wpxr-ob7u.css';
import '../../css/v/v7-g3_bql.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wpxr-ob7u"/><path class="v7-g3_bql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:winch-48-bold"} {...others} />);
}

export default Component;
