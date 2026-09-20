import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uov_tcc-r.css';
import '../../css/r/rfvufj5tw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uov_tcc-r"/><path class="rfvufj5tw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:smart-watch-square-download-bold"} {...others} />);
}

export default Component;
