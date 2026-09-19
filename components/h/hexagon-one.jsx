import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gx_4j-mjb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gx_4j-mjb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:hexagon-one"} {...others} />);
}

export default Component;
