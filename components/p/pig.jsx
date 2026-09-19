import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k08wfzb-r.css';
import '../../css/k/kqj0a-16s.css';
import '../../css/b/bp8wkbb-m.css';
import '../../css/v/vzudknd9f.css';
import '../../css/c/cm-wf9fux.css';
import '../../css/d/d566cfb7x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="k08wfzb-r"/><ellipse class="kqj0a-16s"/><circle class="bp8wkbb-m"/><circle class="vzudknd9f"/><circle class="cm-wf9fux"/><circle class="d566cfb7x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:pig"} {...others} />);
}

export default Component;
