import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dzpc1o6iu.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="dzpc1o6iu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:recycle-bin-remix"} {...others} />);
}

export default Component;
