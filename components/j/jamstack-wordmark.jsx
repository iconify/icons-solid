import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sfh7s4zzd.css';
import '../../css/q/q6j6r4b5p.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="sfh7s4zzd"/><path class="q6j6r4b5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:jamstack-wordmark"} {...others} />);
}

export default Component;
