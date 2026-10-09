import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gf27qfbet.css';
import '../../css/q/q1h4i7rsw.css';
import '../../css/c/cgb5bcg0o.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gf27qfbet"/><path class="q1h4i7rsw"/><path class="cgb5bcg0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:weir-20"} {...others} />);
}

export default Component;
