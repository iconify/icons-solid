import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3s8gvbze.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="v3s8gvbze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:clothes-cardigan"} {...others} />);
}

export default Component;
