import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fio839f8b.css';
import '../../css/t/t0ylnq39z.css';
import '../../css/i/izxst9d8w.css';
import '../../css/g/govvadqsn.css';
import '../../css/t/tt0w_4bls.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="fio839f8b"/><path class="t0ylnq39z wm-k"/><path class="izxst9d8w wm-a"/><path class="govvadqsn wm-k"/><path class="tt0w_4bls wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:heart-balloon-sketch"} {...others} />);
}

export default Component;
