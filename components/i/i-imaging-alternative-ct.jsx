import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g4porcctd.css';
import '../../css/e/egn_lcc1j.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="g4porcctd"/><path class="egn_lcc1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-imaging-alternative-ct"} {...others} />);
}

export default Component;
