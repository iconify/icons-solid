import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/acmwh1p4z.css';
import '../../css/e/e3v1inbws.css';
import '../../css/b/bbq7rkbew.css';

const viewBox = {"width":65,"height":64};
const content = `<path class="acmwh1p4z"/><path class="e3v1inbws"/><path class="bbq7rkbew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:imaging-alternative-pet"} {...others} />);
}

export default Component;
