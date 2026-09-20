import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/v/vnd-gybxd.css';
import '../../css/v/vlq-7z25d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="vnd-gybxd"/><path class="vlq-7z25d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:roll-light-light"} {...others} />);
}

export default Component;
