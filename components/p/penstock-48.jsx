import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aoae257bl.css';
import '../../css/g/gi5oa8bic.css';
import '../../css/h/hcflecbqd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="aoae257bl"/><path class="gi5oa8bic"/><path class="hcflecbqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:penstock-48"} {...others} />);
}

export default Component;
