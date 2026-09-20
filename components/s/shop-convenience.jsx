import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qjzs4ac9c.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="qjzs4ac9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:shop-convenience"} {...others} />);
}

export default Component;
