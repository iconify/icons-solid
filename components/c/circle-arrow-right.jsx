import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/maimo8bna.css';
import '../../css/i/ia25_fnjm.css';
import '../../css/n/n8x36acya.css';
import '../../css/s/s1e2gibpn.css';
import '../../css/e/e9tz1vbtf.css';
import '../../css/j/j_dt9fb7r.css';
import '../../css/s/s03w5k5hh.css';
import '../../css/b/bhhvz6blv.css';
import '../../css/u/uu28zobfn.css';
import '../../css/p/pp1ow454r.css';
import '../../css/l/lt2f4nb2j.css';
import '../../css/k/kdnd13bea.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="maimo8bna wm-shadow"/><path class="ia25_fnjm wm-k"/><path class="n8x36acya wm-k"/><path class="s1e2gibpn wm-k"/><path class="e9tz1vbtf wm-k"/><path class="j_dt9fb7r wm-shine"/><path class="s03w5k5hh wm-k"/><path class="bhhvz6blv wm-a"/><path class="uu28zobfn wm-a"/><path class="pp1ow454r wm-a"/><path class="lt2f4nb2j wm-a"/><path class="kdnd13bea wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:circle-arrow-right"} {...others} />);
}

export default Component;
