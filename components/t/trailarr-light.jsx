import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cqyns6bnn.css';
import '../../css/n/n75ow_brw.css';
import '../../css/w/wpkm073zg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cqyns6bnn"/><path class="n75ow_brw"/><path class="wpkm073zg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:trailarr-light"} {...others} />);
}

export default Component;
