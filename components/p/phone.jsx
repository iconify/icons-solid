import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/seqji0d1d.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="seqji0d1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:phone"} {...others} />);
}

export default Component;
