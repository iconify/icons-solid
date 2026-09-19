import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/r/rnzbfibwd.css';
import '../../css/f/fd4n1j82x.css';
import '../../css/y/ygf737bqn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="rnzbfibwd"/><path class="fd4n1j82x"/><path class="ygf737bqn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:folder-image-light"} {...others} />);
}

export default Component;
