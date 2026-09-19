import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gzcy8-vtw.css';
import '../../css/f/fv9ax2bso.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gzcy8-vtw"/><path class="fv9ax2bso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:clock"} {...others} />);
}

export default Component;
