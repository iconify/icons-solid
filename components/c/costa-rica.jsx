import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w37u6nj1g.css';
import '../../css/f/ft6yuqb7o.css';
import '../../css/l/l8fjmsy3u.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="w37u6nj1g"/><path class="ft6yuqb7o"/><path class="l8fjmsy3u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:costa-rica"} {...others} />);
}

export default Component;
