import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i6hwvs4-a.css';
import '../../css/h/heccpqbex.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="i6hwvs4-a"/><path class="heccpqbex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:swing-music"} {...others} />);
}

export default Component;
