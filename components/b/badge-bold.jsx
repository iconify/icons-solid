import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/g/ggg2z8w3r.css';
import '../../css/a/am7huy7gk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="ggg2z8w3r"/><path class="am7huy7gk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:badge-bold"} {...others} />);
}

export default Component;
