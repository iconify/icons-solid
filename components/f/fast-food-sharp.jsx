import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flab64b9x.css';
import '../../css/e/eehn7s3el.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="flab64b9x"/><path class="eehn7s3el"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:fast-food-sharp"} {...others} />);
}

export default Component;
