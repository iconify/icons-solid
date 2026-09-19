import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ihmh29bqx.css';
import '../../css/l/lhghp8bem.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ihmh29bqx"/><path clip-rule="evenodd" class="lhghp8bem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:calendar-date-range-16-solid"} {...others} />);
}

export default Component;
