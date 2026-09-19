import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k1e1ldbxe.css';
import '../../css/b/beggmnimb.css';
import '../../css/p/psrn3dbdq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k1e1ldbxe"/><path class="beggmnimb"/><path class="psrn3dbdq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gridicons:story"} {...others} />);
}

export default Component;
