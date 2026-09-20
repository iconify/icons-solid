import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sbijkh5cx.css';
import '../../css/g/gn6k-_cxl.css';
import '../../css/z/zwai74zkw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sbijkh5cx"/><path class="gn6k-_cxl"/><circle class="zwai74zkw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:piwigo"} {...others} />);
}

export default Component;
