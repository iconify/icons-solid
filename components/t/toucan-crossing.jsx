import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v9ulzb9qo.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="v9ulzb9qo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:toucan-crossing"} {...others} />);
}

export default Component;
