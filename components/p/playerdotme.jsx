import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bqd-mv85n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bqd-mv85n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:playerdotme"} {...others} />);
}

export default Component;
