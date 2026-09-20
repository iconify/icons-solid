import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ru1pniv2i.css';
import '../../css/l/lluucabrf.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ru1pniv2i"/><path class="lluucabrf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:design-dropper-1"} {...others} />);
}

export default Component;
