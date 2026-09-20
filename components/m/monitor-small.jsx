import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b1-e7co-x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b1-e7co-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:monitor-small"} {...others} />);
}

export default Component;
