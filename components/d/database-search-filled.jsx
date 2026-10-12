import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vapumvfpg.css';
import '../../css/e/edfoyo7yi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vapumvfpg"/><path clip-rule="evenodd" class="edfoyo7yi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:database-search-filled"} {...others} />);
}

export default Component;
