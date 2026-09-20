import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aznt7d64g.css';
import '../../css/l/ld_h86szq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aznt7d64g"/><path class="ld_h86szq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:image-search-filled"} {...others} />);
}

export default Component;
