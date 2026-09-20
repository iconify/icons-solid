import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bybb08b1e.css';
import '../../css/i/ignl7ccte.css';
import '../../css/o/os13rubjj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bybb08b1e"/><path class="ignl7ccte"/><path class="os13rubjj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:data-file-bars-add-bold"} {...others} />);
}

export default Component;
