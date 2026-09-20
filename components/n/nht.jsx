import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/behyiq7it.css';
import '../../css/u/u0qvpwb3u.css';
import '../../css/r/r1kzqabmm.css';
import '../../css/f/foybkjl5s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="behyiq7it"/><path class="u0qvpwb3u"/><path class="r1kzqabmm"/><path class="foybkjl5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:nht"} {...others} />);
}

export default Component;
