import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b0dbqj1gj.css';
import '../../css/i/io85o8bhu.css';
import '../../css/n/ngq3jibfy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="b0dbqj1gj"/><path class="io85o8bhu"/><path class="ngq3jibfy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:elevator-48-bold"} {...others} />);
}

export default Component;
