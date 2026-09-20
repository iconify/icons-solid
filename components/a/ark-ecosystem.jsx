import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/btc7y3bwj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="btc7y3bwj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:ark-ecosystem"} {...others} />);
}

export default Component;
