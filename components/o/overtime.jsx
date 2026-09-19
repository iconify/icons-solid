import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3ynbcbuf.css';
import '../../css/u/urs239bnm.css';
import '../../css/b/bvkc79bpm.css';
import '../../css/f/fguxjqbui.css';
import '../../css/a/aq22w3bqw.css';
import '../../css/a/a-co92bep.css';
import '../../css/d/d7fci9b8p.css';
import '../../css/p/pr2zy1b6y.css';
import '../../css/q/q77owybqy.css';
import '../../css/t/ttpdsvblw.css';
import '../../css/i/ippmm3s5t.css';
import '../../css/l/ldj3sybhy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="w3ynbcbuf"/><path class="urs239bnm"/><g class="bvkc79bpm"><circle class="fguxjqbui"/><circle class="aq22w3bqw"/></g><path class="a-co92bep"/><path class="d7fci9b8p"/><circle class="pr2zy1b6y"/><circle class="q77owybqy"/><path class="ttpdsvblw"/><path class="ippmm3s5t"/><circle class="ldj3sybhy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:overtime"} {...others} />);
}

export default Component;
