import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iq39e_bxv.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="iq39e_bxv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:user"} {...others} />);
}

export default Component;
