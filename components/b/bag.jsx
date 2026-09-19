import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z7mycjx6q.css';
import '../../css/n/nc-9p9b3n.css';
import '../../css/k/ka5q-90kt.css';
import '../../css/b/bxccd0bse.css';
import '../../css/i/iahvlmxrj.css';
import '../../css/q/qaua4xbfd.css';
import '../../css/l/l6fv9tmtx.css';
import '../../css/l/l6y9qibkl.css';
import '../../css/p/p9lalnb4v.css';
import '../../css/c/c2-qmo6gq.css';
import '../../css/s/s8znj0xzf.css';
import '../../css/k/kebwkvbpq.css';
import '../../css/f/fj70opbzg.css';
import '../../css/b/bl00agb3h.css';

const viewBox = {"width":90,"height":100};
const content = `<path class="z7mycjx6q"/><path class="nc-9p9b3n"/><path class="ka5q-90kt"/><path class="bxccd0bse"/><path class="iahvlmxrj"/><path class="qaua4xbfd"/><path class="l6fv9tmtx"/><path class="l6y9qibkl"/><path class="p9lalnb4v"/><path class="c2-qmo6gq"/><path class="s8znj0xzf"/><path class="kebwkvbpq"/><path class="fj70opbzg"/><path class="bl00agb3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:bag"} {...others} />);
}

export default Component;
