import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dybwt5b_o.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="dybwt5b_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:ticket-perforated-fill"} {...others} />);
}

export default Component;
