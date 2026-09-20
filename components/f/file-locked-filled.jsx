import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rgf_iypbv.css';
import '../../css/s/sfsa80h7t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rgf_iypbv"/><path class="sfsa80h7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:file-locked-filled"} {...others} />);
}

export default Component;
