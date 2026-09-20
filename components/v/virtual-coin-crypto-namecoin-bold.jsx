import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p7poolbui.css';
import '../../css/q/qc9ri3n6a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p7poolbui"/><path class="qc9ri3n6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:virtual-coin-crypto-namecoin-bold"} {...others} />);
}

export default Component;
