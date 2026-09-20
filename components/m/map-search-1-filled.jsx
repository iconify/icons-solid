import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_ihi-nli.css';
import '../../css/r/rb93hspbh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e_ihi-nli"/><path class="rb93hspbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:map-search-1-filled"} {...others} />);
}

export default Component;
