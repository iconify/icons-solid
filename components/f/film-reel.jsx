import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/acwag3hrs.css';
import '../../css/s/so_xtp9om.css';
import '../../css/i/i6c0yob8f.css';
import '../../css/o/onbjybayc.css';
import '../../css/f/fkydmlbjf.css';
import '../../css/q/q9beu7lex.css';
import '../../css/t/trqslsczz.css';
import '../../css/z/za_lg7bqv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="acwag3hrs"/><circle class="so_xtp9om"/><circle class="i6c0yob8f"/><g class="onbjybayc"><circle class="fkydmlbjf"/><circle class="q9beu7lex"/><circle class="trqslsczz"/><circle class="za_lg7bqv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:film-reel"} {...others} />);
}

export default Component;
