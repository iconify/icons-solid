import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mnp81lbbc.css';
import '../../css/o/odno2sboo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mnp81lbbc"/><path class="odno2sboo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:sort-alpha-asc-24"} {...others} />);
}

export default Component;
