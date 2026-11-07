import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-e9pdl7a.css';
import '../../css/v/vnqotyhmz.css';
import '../../css/j/jb__gobaz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k-e9pdl7a"/><path class="vnqotyhmz"/><path class="jb__gobaz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:streets-bold"} {...others} />);
}

export default Component;
