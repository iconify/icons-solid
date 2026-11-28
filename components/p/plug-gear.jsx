import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rdr48f5mp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rdr48f5mp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:plug-gear"} {...others} />);
}

export default Component;
