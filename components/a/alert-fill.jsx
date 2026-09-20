import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yeip2-y6i.css';
import '../../css/a/ar_zf9d2w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yeip2-y6i"/><path class="ar_zf9d2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:alert-fill"} {...others} />);
}

export default Component;
