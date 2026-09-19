import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nb4gcfb7f.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="nb4gcfb7f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:unlock-fill"} {...others} />);
}

export default Component;
