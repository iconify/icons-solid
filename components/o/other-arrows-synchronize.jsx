import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m29b3obzd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="m29b3obzd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:other-arrows-synchronize"} {...others} />);
}

export default Component;
