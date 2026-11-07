import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lkozawy4w.css';
import '../../css/b/b0mwi-brc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lkozawy4w"/><path clip-rule="evenodd" class="b0mwi-brc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:magnifier-check-outline"} {...others} />);
}

export default Component;
