import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xi_1hpbju.css';
import '../../css/a/au4p_eikh.css';
import '../../css/m/mp4w44wnb.css';
import '../../css/i/iod9gnb2l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xi_1hpbju"/><path class="au4p_eikh"/><path class="mp4w44wnb"/><path class="iod9gnb2l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:check-button"} {...others} />);
}

export default Component;
