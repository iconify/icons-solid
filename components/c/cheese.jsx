import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c-o5zcb4l.css';
import '../../css/h/hpe3joppp.css';
import '../../css/g/gtci1mb3a.css';
import '../../css/b/b1y56jbxn.css';
import '../../css/d/drjfn8ypm.css';
import '../../css/w/wbccjbclf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="c-o5zcb4l"/><path class="hpe3joppp"/><circle class="gtci1mb3a"/><circle class="b1y56jbxn"/><circle class="drjfn8ypm"/><circle class="wbccjbclf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:cheese"} {...others} />);
}

export default Component;
