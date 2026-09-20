import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i18zufxoo.css';
import '../../css/v/voomukr-r.css';
import '../../css/g/g1t4agbek.css';
import '../../css/k/k8p3yzvnp.css';
import '../../css/s/sfdov_mfv.css';
import '../../css/t/tr91z8blw.css';
import '../../css/j/j74qbqbxy.css';
import '../../css/k/k2mg8tl-w.css';
import '../../css/z/z1tg_1bsp.css';
import '../../css/h/hs96dacqb.css';
import '../../css/n/ns_b3tbdq.css';
import '../../css/t/t4vo-3v6x.css';
import '../../css/d/dy954eb5q.css';
import '../../css/f/fb38hxb4j.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="i18zufxoo"/><circle class="voomukr-r"/><circle class="g1t4agbek"/><circle class="k8p3yzvnp"/><path class="sfdov_mfv"/><circle class="tr91z8blw"/><circle class="j74qbqbxy"/><circle class="k2mg8tl-w"/><path class="z1tg_1bsp"/><path class="hs96dacqb"/><path class="ns_b3tbdq"/><path class="t4vo-3v6x"/><path class="dy954eb5q"/><path class="fb38hxb4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:graphql"} {...others} />);
}

export default Component;
