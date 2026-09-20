import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b0bszdh_h.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="b0bszdh_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:hard-drive-2-remix"} {...others} />);
}

export default Component;
