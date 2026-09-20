import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q62_69bfb.css';
import '../../css/e/ebgyviymh.css';
import '../../css/w/wmf1kublg.css';
import '../../css/z/zc_qphfye.css';
import '../../css/d/dj-fnilqe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q62_69bfb"/><path class="ebgyviymh"/><path class="wmf1kublg"/><path class="zc_qphfye"/><path class="dj-fnilqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:egg"} {...others} />);
}

export default Component;
