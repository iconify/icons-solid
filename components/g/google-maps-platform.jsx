import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cjazihb8a.css';
import '../../css/b/bebqe1bxz.css';
import '../../css/u/ubukluesx.css';
import '../../css/u/u8jp0itvb.css';
import '../../css/q/qwrx_blcb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cjazihb8a"/><path class="bebqe1bxz"/><path class="ubukluesx"/><path class="u8jp0itvb"/><path class="qwrx_blcb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:google-maps-platform"} {...others} />);
}

export default Component;
