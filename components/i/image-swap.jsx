import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sz4p-zbwn.css';
import '../../css/m/ma9kwbckm.css';
import '../../css/f/fbk86ac9j.css';
import '../../css/s/s3sm2_bin.css';
import '../../css/a/a0oguobgi.css';
import '../../css/a/ay5_4fzox.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sz4p-zbwn"/><path class="ma9kwbckm"/><path class="fbk86ac9j"/><rect class="s3sm2_bin"/><rect class="a0oguobgi"/><path class="ay5_4fzox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:image-swap"} {...others} />);
}

export default Component;
