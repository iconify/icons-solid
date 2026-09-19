import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/q/qumfsab4v.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/diyxjxq2t.css';
import '../../css/r/rb52_7vlf.css';
import '../../css/s/s_ypkmx-c.css';

const viewBox = {"width":32,"height":24};
const content = `<mask id="SVGJl4X0cJB" class="n1mjunbsu"><path clip-rule="evenodd" class="qumfsab4v"/></mask><g class="ft5dv1b6b"><path clip-rule="evenodd" class="diyxjxq2t"/><path mask="url(#SVGJl4X0cJB)" class="rb52_7vlf"/><path clip-rule="evenodd" class="s_ypkmx-c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:mt"} {...others} />);
}

export default Component;
