import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yhsh92wql.css';
import '../../css/s/s35839b-a.css';
import '../../css/q/qsxp9sa8e.css';
import '../../css/h/h11pdnhbd.css';
import '../../css/e/eczyi5b2r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yhsh92wql"/><path class="s35839b-a"/><path class="qsxp9sa8e"/><path class="h11pdnhbd"/><path class="eczyi5b2r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:design-file-ai"} {...others} />);
}

export default Component;
