import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u8mn3cssj.css';
import '../../css/b/bcaaafv4h.css';
import '../../css/z/z8-thgb1h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u8mn3cssj"/><path class="bcaaafv4h"/><path class="z8-thgb1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ladybird-20-bold"} {...others} />);
}

export default Component;
