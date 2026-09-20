import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tg0kydbza.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="tg0kydbza"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:star-wand-with-stardust"} {...others} />);
}

export default Component;
