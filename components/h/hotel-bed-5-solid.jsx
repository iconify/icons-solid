import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k63mzac7p.css';
import '../../css/a/atm2gfkao.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="k63mzac7p"/><path class="atm2gfkao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:hotel-bed-5-solid"} {...others} />);
}

export default Component;
