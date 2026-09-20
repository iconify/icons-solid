import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tr6qntbff.css';
import '../../css/y/y6q6mnb3i.css';
import '../../css/r/re7ja8bkq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tr6qntbff"/><path class="y6q6mnb3i"/><path class="re7ja8bkq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:shop-1-filled"} {...others} />);
}

export default Component;
