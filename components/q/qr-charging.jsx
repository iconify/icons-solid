import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uk6nrckuy.css';
import '../../css/q/qljskglob.css';
import '../../css/b/bqcg8gbob.css';
import '../../css/z/zwsam6e5w.css';
import '../../css/l/l9ehr-4nc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="uk6nrckuy"/><rect class="qljskglob"/><rect class="bqcg8gbob"/><path class="zwsam6e5w"/><path class="l9ehr-4nc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:qr-charging"} {...others} />);
}

export default Component;
