import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r683lebsl.css';
import '../../css/v/vwe1yk9rv.css';
import '../../css/n/nm93axxpm.css';
import '../../css/y/y842qjt3q.css';
import '../../css/i/i3vinab1m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="r683lebsl"/><path class="vwe1yk9rv"/><path class="nm93axxpm"/><path class="y842qjt3q"/><path class="i3vinab1m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:data-centre-cooling-20-bold"} {...others} />);
}

export default Component;
