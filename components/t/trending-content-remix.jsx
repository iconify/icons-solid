import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pwl4lns9k.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="pwl4lns9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:trending-content-remix"} {...others} />);
}

export default Component;
