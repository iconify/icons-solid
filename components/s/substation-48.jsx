import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cxp4m9b4u.css';
import '../../css/g/goglxpbft.css';
import '../../css/j/j8jzh-cpm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cxp4m9b4u"/><path class="goglxpbft"/><path class="j8jzh-cpm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:substation-48"} {...others} />);
}

export default Component;
