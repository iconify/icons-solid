import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ak0bvlpdn.css';
import '../../css/t/tdr-0yasd.css';
import '../../css/s/s-edpzbsh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ak0bvlpdn"/><path class="tdr-0yasd"/><path class="s-edpzbsh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:synology"} {...others} />);
}

export default Component;
