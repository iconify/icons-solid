import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_nf0ib1w.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="t_nf0ib1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:megaphone-fill-16"} {...others} />);
}

export default Component;
