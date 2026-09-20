import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fqqd4rxmm.css';
import '../../css/p/p2wvxfw0k.css';
import '../../css/t/txvc8yb8p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fqqd4rxmm"/><path class="p2wvxfw0k"/><path class="txvc8yb8p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:office-file-xls"} {...others} />);
}

export default Component;
