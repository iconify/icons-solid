import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pazk0caul.css';
import '../../css/g/gf82be1gy.css';
import '../../css/b/b-xxa7vlp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pazk0caul"/><path class="gf82be1gy"/><path class="b-xxa7vlp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:data-file-search-bold"} {...others} />);
}

export default Component;
