import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c7d8-7bnk.css';
import '../../css/l/ljv8sbwcz.css';
import '../../css/t/tf4su8b2i.css';
import '../../css/s/spp8njbrp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c7d8-7bnk"/><path class="ljv8sbwcz"/><path class="tf4su8b2i"/><path class="spp8njbrp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:website-development-browser-page-layout"} {...others} />);
}

export default Component;
