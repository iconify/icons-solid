import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lsvhz9bpc.css';
import '../../css/u/ui3j74sqk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lsvhz9bpc wm-k"/><path class="ui3j74sqk wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:badge-percent"} {...others} />);
}

export default Component;
