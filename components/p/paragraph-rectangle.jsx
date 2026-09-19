import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f56uzi7gw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="f56uzi7gw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:paragraph-rectangle"} {...others} />);
}

export default Component;
