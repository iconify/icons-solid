import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nwkghnbhw.css';
import '../../css/g/guuurn7sm.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="nwkghnbhw"/><path class="guuurn7sm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:download-fill-16"} {...others} />);
}

export default Component;
