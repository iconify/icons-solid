import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/t/t-nrg-rng.css';
import '../../css/j/j-dvglbpd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="t-nrg-rng"/><path class="j-dvglbpd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:bugsnag-logo"} {...others} />);
}

export default Component;
