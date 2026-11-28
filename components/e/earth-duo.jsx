import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vqiz-dwfi.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/spokbjbne.css';
import '../../css/r/raewjx2vl.css';
import '../../css/c/cvitlkb7d.css';
import '../../css/m/mwrf1aclp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary vqiz-dwfi"/><g class="dt0cm9dhy primary"><path class="spokbjbne"/><path class="raewjx2vl"/><path class="cvitlkb7d"/><path class="mwrf1aclp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:earth-duo"} {...others} />);
}

export default Component;
