import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/egi_r6m4k.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="egi_r6m4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:horizontal-bar"} {...others} />);
}

export default Component;
