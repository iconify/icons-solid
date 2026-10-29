import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iqahawbpo.css';
import '../../css/t/tsxk8iyyp.css';
import '../../css/p/pz-mlfbic.css';
import '../../css/o/o_d3el_0s.css';
import '../../css/n/nqnmp4bmn.css';
import '../../css/a/awclzrb5l.css';
import '../../css/c/cwcfrqv0d.css';
import '../../css/k/ky8hicbtq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iqahawbpo wm-shadow"/><path class="tsxk8iyyp wm-k"/><path class="pz-mlfbic wm-k"/><path class="o_d3el_0s wm-k"/><path class="nqnmp4bmn wm-k"/><path class="awclzrb5l wm-k"/><path class="cwcfrqv0d wm-shine"/><path class="ky8hicbtq wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:shield-alert"} {...others} />);
}

export default Component;
