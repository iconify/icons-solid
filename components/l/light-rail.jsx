import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b8w9ex5ed.css';
import '../../css/y/yyc1nbciz.css';
import '../../css/t/tmu17vbxh.css';
import '../../css/k/k6851h9gp.css';
import '../../css/p/paw7mjb7w.css';
import '../../css/k/k5gtkcqjb.css';
import '../../css/g/g9hgpqb1l.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="b8w9ex5ed"/><path class="yyc1nbciz"/><path class="tmu17vbxh"/><path class="k6851h9gp"/><path class="paw7mjb7w"/><path class="k5gtkcqjb"/><path class="g9hgpqb1l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:light-rail"} {...others} />);
}

export default Component;
