import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/drr_rdr2u.css';
import '../../css/j/jw6etd-fn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="drr_rdr2u"/><path class="jw6etd-fn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:chart-pie-solid"} {...others} />);
}

export default Component;
