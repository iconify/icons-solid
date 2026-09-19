import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/ap7wos9hr.css';
import '../../css/n/nx69-h78z.css';
import '../../css/y/ya-dy94px.css';
import '../../css/x/x68hgabkd.css';
import '../../css/w/wkgi_5b7h.css';
import '../../css/b/bik11frnj.css';
import '../../css/n/nnz38epoe.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ap7wos9hr"/><path class="nx69-h78z"/><path class="ya-dy94px"/><path class="x68hgabkd"/><path class="wkgi_5b7h"/><path class="bik11frnj"/><path class="nnz38epoe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:chafing-dish-one"} {...others} />);
}

export default Component;
