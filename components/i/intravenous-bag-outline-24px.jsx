import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s2m81sbke.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="s2m81sbke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:intravenous-bag-outline-24px"} {...others} />);
}

export default Component;
