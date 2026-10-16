import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s7mn3bcuw.css';
import '../../css/x/x-2o_ni0u.css';
import '../../css/s/se4zpyb9x.css';
import '../../css/g/g2shq8b2q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s7mn3bcuw"/><path class="x-2o_ni0u"/><path class="se4zpyb9x"/><path class="g2shq8b2q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:messages-question"} {...others} />);
}

export default Component;
