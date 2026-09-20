import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tfahfob6w.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="tfahfob6w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:copy-one-outline"} {...others} />);
}

export default Component;
