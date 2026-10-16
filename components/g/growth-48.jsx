import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j0_0708wb.css';
import '../../css/b/b768ng9cg.css';
import '../../css/t/ttpih3a4n.css';
import '../../css/h/ht2kccogc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j0_0708wb"/><path class="b768ng9cg"/><path class="ttpih3a4n"/><path class="ht2kccogc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:growth-48"} {...others} />);
}

export default Component;
