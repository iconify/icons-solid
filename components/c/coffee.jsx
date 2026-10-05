import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/e/e_ss3q__z.css';
import '../../css/q/qjsrdi4zw.css';
import '../../css/q/qid97gbnp.css';
import '../../css/u/ua25fxg7u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="e_ss3q__z"/><path class="qjsrdi4zw"/><path class="qid97gbnp"/><path class="ua25fxg7u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:coffee"} {...others} />);
}

export default Component;
