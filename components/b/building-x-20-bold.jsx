import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqsj93biv.css';
import '../../css/n/ncybe8mrd.css';
import '../../css/f/fk_ahtbzo.css';
import '../../css/b/b325a1bje.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wqsj93biv"/><path class="ncybe8mrd"/><path class="fk_ahtbzo"/><path class="b325a1bje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:building-x-20-bold"} {...others} />);
}

export default Component;
