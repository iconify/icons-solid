import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nb9dqsb0o.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="nb9dqsb0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:layout-three-columns"} {...others} />);
}

export default Component;
