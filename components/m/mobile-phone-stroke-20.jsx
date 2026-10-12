import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k9so18btn.css';
import '../../css/q/qlx4k6bgd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k9so18btn"/><path class="qlx4k6bgd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:mobile-phone-stroke-20"} {...others} />);
}

export default Component;
