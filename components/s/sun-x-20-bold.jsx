import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zwjp_wt2n.css';
import '../../css/a/aqsnv9bnd.css';
import '../../css/f/fk_ahtbzo.css';
import '../../css/b/b325a1bje.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zwjp_wt2n"/><path class="aqsnv9bnd"/><path class="fk_ahtbzo"/><path class="b325a1bje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sun-x-20-bold"} {...others} />);
}

export default Component;
