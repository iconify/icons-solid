import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cvv_78wpo.css';
import '../../css/c/cecp9abjx.css';
import '../../css/j/jr0laybrs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cvv_78wpo"/><path class="cecp9abjx"/><path class="jr0laybrs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-stopwatch"} {...others} />);
}

export default Component;
