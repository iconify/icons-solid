import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_3n_ebhb.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="a_3n_ebhb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:gamepad"} {...others} />);
}

export default Component;
