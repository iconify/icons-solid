import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lelhfpbde.css';
import '../../css/a/a4jsaxbri.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lelhfpbde"/><path class="a4jsaxbri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:file-download-solid"} {...others} />);
}

export default Component;
