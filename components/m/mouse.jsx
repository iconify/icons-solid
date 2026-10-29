import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/upvo35bmf.css';
import '../../css/a/a9_wu8biq.css';
import '../../css/p/p3e2bqbuk.css';
import '../../css/u/uutxkxb_o.css';
import '../../css/j/jqj9ayb7u.css';
import '../../css/z/z9spq-juo.css';
import '../../css/h/hm81pqb9q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="upvo35bmf wm-k"/><path class="a9_wu8biq wm-k"/><path class="p3e2bqbuk wm-k"/><path class="uutxkxb_o wm-shine"/><path class="jqj9ayb7u wm-a"/><path class="wm-a z9spq-juo"/><path class="hm81pqb9q wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:mouse"} {...others} />);
}

export default Component;
