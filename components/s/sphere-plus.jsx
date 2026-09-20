import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b9v423h4j.css';
import '../../css/p/pgb3-jb6e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b9v423h4j"/><path class="pgb3-jb6e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:sphere-plus"} {...others} />);
}

export default Component;
