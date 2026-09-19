import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v1yrw_kmb.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="v1yrw_kmb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:otfeature-sups-small-filled"} {...others} />);
}

export default Component;
