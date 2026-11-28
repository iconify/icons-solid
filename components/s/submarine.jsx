import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zk77vrvlr.css';
import '../../css/f/fabxojnqt.css';
import '../../css/t/teootboue.css';
import '../../css/a/afqrzkwcg.css';
import '../../css/f/f7tenortn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="zk77vrvlr"/><path class="fabxojnqt"/><path class="teootboue"/><path class="afqrzkwcg"/><path class="f7tenortn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:submarine"} {...others} />);
}

export default Component;
