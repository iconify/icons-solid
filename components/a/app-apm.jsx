import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/krpjbebjv.css';
import '../../css/k/krmzf_byg.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="krpjbebjv"/><path class="krmzf_byg ouiIcon__fillSecondary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:app-apm"} {...others} />);
}

export default Component;
