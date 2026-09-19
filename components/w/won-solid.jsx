import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vdw7zbcpw.css';
import '../../css/n/nlpf3um-f.css';
import '../../css/v/vov4arbmu.css';
import '../../css/a/a1iibebpd.css';
import '../../css/t/tfne23ozb.css';
import '../../css/i/izqc8-zuk.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-solid clr-i-solid-path-1 vdw7zbcpw"/><path class="clr-i-solid clr-i-solid-path-2 nlpf3um-f"/><path class="clr-i-solid clr-i-solid-path-3 vov4arbmu"/><path class="a1iibebpd clr-i-solid clr-i-solid-path-4"/><path class="clr-i-solid clr-i-solid-path-5 tfne23ozb"/><path class="clr-i-solid clr-i-solid-path-6 izqc8-zuk"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:won-solid"} {...others} />);
}

export default Component;
