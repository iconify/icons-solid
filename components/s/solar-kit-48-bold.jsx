import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gdq198b0v.css';
import '../../css/v/vltasnbml.css';
import '../../css/u/u9s6q-bmz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gdq198b0v"/><path class="vltasnbml"/><path class="u9s6q-bmz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-kit-48-bold"} {...others} />);
}

export default Component;
