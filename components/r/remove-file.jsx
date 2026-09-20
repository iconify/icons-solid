import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/foa7vwb3f.css';
import '../../css/p/puxm9jbmg.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="foa7vwb3f"/><path class="puxm9jbmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:remove-file"} {...others} />);
}

export default Component;
