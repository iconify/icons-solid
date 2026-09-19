import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xoec_aceq.css';
import '../../css/b/bii24pcyv.css';
import '../../css/i/iksyp0jtl.css';
import '../../css/u/un8hgvb8l.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xoec_aceq"/><g class="bii24pcyv"><path class="iksyp0jtl"/><path class="un8hgvb8l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:export"} {...others} />);
}

export default Component;
