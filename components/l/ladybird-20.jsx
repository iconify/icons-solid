import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z2833rb_h.css';
import '../../css/m/mwapz_r-l.css';
import '../../css/r/rxcdkqb9f.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z2833rb_h"/><path class="mwapz_r-l"/><path class="rxcdkqb9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ladybird-20"} {...others} />);
}

export default Component;
