import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wk7w8lbac.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wk7w8lbac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:circle-layer"} {...others} />);
}

export default Component;
