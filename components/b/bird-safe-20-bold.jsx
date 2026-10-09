import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cplwbao.css';
import '../../css/d/diot1q9qf.css';
import '../../css/a/as9ixf4ib.css';
import '../../css/z/zz39v3ury.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="s9cplwbao"/><path class="diot1q9qf"/><path class="as9ixf4ib"/><path class="zz39v3ury"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bird-safe-20-bold"} {...others} />);
}

export default Component;
