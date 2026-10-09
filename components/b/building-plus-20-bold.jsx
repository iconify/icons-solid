import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqsj93biv.css';
import '../../css/u/uwl5ht5rg.css';
import '../../css/e/evw_lacsv.css';
import '../../css/p/prfptqbhf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wqsj93biv"/><path class="uwl5ht5rg"/><path class="evw_lacsv"/><path class="prfptqbhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:building-plus-20-bold"} {...others} />);
}

export default Component;
