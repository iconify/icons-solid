import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/txy8rw54j.css';
import '../../css/a/a9q9e7b6g.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="txy8rw54j"/><path clip-rule="evenodd" class="a9q9e7b6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:calendar-no-access-solid"} {...others} />);
}

export default Component;
