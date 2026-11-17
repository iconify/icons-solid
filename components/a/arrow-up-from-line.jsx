import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/h/h04b3_akp.css';
import '../../css/p/pytpsobef.css';
import '../../css/p/ppr5ipb7o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="h04b3_akp"/><path class="pytpsobef"/><path class="ppr5ipb7o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:arrow-up-from-line"} {...others} />);
}

export default Component;
