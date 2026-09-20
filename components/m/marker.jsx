import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qa-o7h.css';
import '../../css/z/zntd8k.css';
import '../../css/t/t5zxbs.css';
import '../../css/s/so-from-46.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-9jpx1r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qa-o7h zntd8k"/><path class="qa-o7h t5zxbs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:marker"} {...others} />);
}

export default Component;
