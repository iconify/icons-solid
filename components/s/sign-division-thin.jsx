import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/r/r054o8ykj.css';
import '../../css/u/uyyst-lhv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="r054o8ykj"/><path class="uyyst-lhv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:sign-division-thin"} {...others} />);
}

export default Component;
