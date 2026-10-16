import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/csm3j--no.css';
import '../../css/b/bqw6zx0lk.css';
import '../../css/t/t8c3f1o7j.css';
import '../../css/f/fyarqiefq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="csm3j--no"/><path class="bqw6zx0lk"/><path class="t8c3f1o7j"/><path class="fyarqiefq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fuel-oil-tank-48"} {...others} />);
}

export default Component;
