import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xxz9yh_wd.css';
import '../../css/w/why-rnbnl.css';
import '../../css/i/i112c1ruk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xxz9yh_wd"/><path class="why-rnbnl"/><path class="i112c1ruk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:family"} {...others} />);
}

export default Component;
