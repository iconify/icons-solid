import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/r/r60rjky4l.css';
import '../../css/b/bvqtdmbte.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="r60rjky4l"/><path class="bvqtdmbte"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:open-container-initiative-logo"} {...others} />);
}

export default Component;
