import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a1m6vvblk.css';
import '../../css/i/i4mytz8lr.css';
import '../../css/w/wqzdzgbxx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a1m6vvblk"/><path class="i4mytz8lr"/><path class="wqzdzgbxx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-react"} {...others} />);
}

export default Component;
