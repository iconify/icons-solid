import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f3va__60v.css';
import '../../css/r/r8hicpb_n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f3va__60v"/><path class="r8hicpb_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:file-download-fill"} {...others} />);
}

export default Component;
