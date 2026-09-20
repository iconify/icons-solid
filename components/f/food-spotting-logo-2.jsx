import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/f/fwyiitvir.css';
import '../../css/q/qp6qqkr1k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="fwyiitvir"/><path class="qp6qqkr1k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:food-spotting-logo-2"} {...others} />);
}

export default Component;
