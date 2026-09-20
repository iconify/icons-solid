import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ul_1wo81h.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="ul_1wo81h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:workspace-desk-remix"} {...others} />);
}

export default Component;
