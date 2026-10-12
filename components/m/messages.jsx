import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s7mn3bcuw.css';
import '../../css/x/x-2o_ni0u.css';
import '../../css/y/yjpvap7nr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s7mn3bcuw"/><path class="x-2o_ni0u"/><path class="yjpvap7nr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:messages"} {...others} />);
}

export default Component;
