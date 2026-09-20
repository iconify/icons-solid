import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_hwnubhd.css';
import '../../css/u/ud9q8oepu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="r_hwnubhd"/><path class="ud9q8oepu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:dropbox-fill"} {...others} />);
}

export default Component;
