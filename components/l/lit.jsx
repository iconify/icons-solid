import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zdz_qi1ok.css';
import '../../css/m/mwyoejbys.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zdz_qi1ok"/><path clip-rule="evenodd" class="mwyoejbys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:lit"} {...others} />);
}

export default Component;
