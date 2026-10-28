import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/g/g-o6a2-ay.css';
import '../../css/l/lor0dobsk.css';
import '../../css/u/u91wj2bhd.css';
import '../../css/y/ywomxlbes.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><rect class="g-o6a2-ay"/><rect class="lor0dobsk"/><rect class="u91wj2bhd"/><circle class="ywomxlbes"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:application"} {...others} />);
}

export default Component;
