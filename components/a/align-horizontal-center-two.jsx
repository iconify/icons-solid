import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ypv2wabxw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ypv2wabxw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:align-horizontal-center-two"} {...others} />);
}

export default Component;
