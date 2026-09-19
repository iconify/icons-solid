import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/en3cgfbkw.css';
import '../../css/x/xs05ygs4c.css';
import '../../css/n/nfdi2lb9a.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 en3cgfbkw"/><path class="clr-i-outline clr-i-outline-path-2 xs05ygs4c"/><path class="clr-i-outline clr-i-outline-path-3 nfdi2lb9a"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:display-line"} {...others} />);
}

export default Component;
