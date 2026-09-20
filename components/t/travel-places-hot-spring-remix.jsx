import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sulwq35it.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="sulwq35it"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:travel-places-hot-spring-remix"} {...others} />);
}

export default Component;
