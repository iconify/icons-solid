import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tdmx5bchb.css';
import '../../css/b/bsi-fab-z.css';
import '../../css/z/z_t34acqg.css';
import '../../css/k/kyxodwdpy.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="tdmx5bchb"/><rect class="bsi-fab-z"/><rect class="z_t34acqg"/><rect class="kyxodwdpy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:dashboard-alt-filled"} {...others} />);
}

export default Component;
