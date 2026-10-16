import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e6nep0q5q.css';
import '../../css/m/m0scgbc4g.css';
import '../../css/v/v8vdtjh7t.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="e6nep0q5q"/><path class="m0scgbc4g"/><path class="v8vdtjh7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:reply-all-20-bold"} {...others} />);
}

export default Component;
