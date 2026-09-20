import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hswgs7b_p.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hswgs7b_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:jump-over-backwards-16"} {...others} />);
}

export default Component;
