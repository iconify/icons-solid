import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pxwb8tbxv.css';
import '../../css/d/dsco5xu2d.css';
import '../../css/e/e2j9qob0q.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pxwb8tbxv"/><path class="dsco5xu2d"/><path class="e2j9qob0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:test-tube-20"} {...others} />);
}

export default Component;
