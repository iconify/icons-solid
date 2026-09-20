import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/giwee0bss.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="giwee0bss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:hammer-shoe"} {...others} />);
}

export default Component;
