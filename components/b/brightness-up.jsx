import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eesw2yd6v.css';
import '../../css/g/gaj1mzbtw.css';
import '../../css/i/i_pq10znf.css';
import '../../css/x/x1r-wd92u.css';
import '../../css/m/mywdemb5k.css';
import '../../css/p/pk3nb2bha.css';
import '../../css/a/a_f0jnbcc.css';
import '../../css/u/ulm9xjc7q.css';
import '../../css/k/kom4vqb5m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eesw2yd6v"/><circle class="gaj1mzbtw"/><circle class="i_pq10znf"/><circle class="x1r-wd92u"/><circle class="mywdemb5k"/><circle class="pk3nb2bha"/><circle class="a_f0jnbcc"/><circle class="ulm9xjc7q"/><circle class="kom4vqb5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:brightness-up"} {...others} />);
}

export default Component;
