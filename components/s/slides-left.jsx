import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mnaqv781a.css';
import '../../css/g/gr512rxre.css';
import '../../css/a/a8sm415zp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(-90 1.71 20.43)" class="mnaqv781a"/><rect transform="rotate(-90 1.71 20.43)" class="gr512rxre"/><path class="a8sm415zp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:slides-left"} {...others} />);
}

export default Component;
