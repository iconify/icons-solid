import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l7fq4xbnr.css';
import '../../css/w/wg5_tobjq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l7fq4xbnr"/><path class="wg5_tobjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:passport-1"} {...others} />);
}

export default Component;
