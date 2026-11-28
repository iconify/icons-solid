import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rmnrd41ay.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rzkuf1b-n.css';
import '../../css/o/ogdrgdtct.css';
import '../../css/f/fp2gh7bfx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rmnrd41ay secondary"/><g class="dt0cm9dhy primary"><path class="rzkuf1b-n"/><path class="ogdrgdtct"/><path class="fp2gh7bfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:foldable-book-duo"} {...others} />);
}

export default Component;
