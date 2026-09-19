import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gnpbp5f4y.css';
import '../../css/g/gk7wsqrvw.css';
import '../../css/r/rzr3q0bfp.css';
import '../../css/h/hu6ejdbby.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="gnpbp5f4y"/><path class="gk7wsqrvw"/><path class="rzr3q0bfp"/><path class="hu6ejdbby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:workload-identity-pool"} {...others} />);
}

export default Component;
