import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ty51eibwy.css';
import '../../css/x/xi_khzqzd.css';
import '../../css/b/beok1wbax.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ty51eibwy"/><path class="xi_khzqzd"/><path class="beok1wbax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:mic-off-outline"} {...others} />);
}

export default Component;
