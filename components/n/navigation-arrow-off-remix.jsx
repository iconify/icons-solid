import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lq4s77gph.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="lq4s77gph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:navigation-arrow-off-remix"} {...others} />);
}

export default Component;
