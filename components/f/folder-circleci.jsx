import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dypv3-mdc.css';
import '../../css/j/jrywsebcn.css';
import '../../css/e/eoh-kmiad.css';
import '../../css/u/un29wccgo.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="dypv3-mdc"/><g class="jrywsebcn"><path class="eoh-kmiad"/><circle class="un29wccgo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-circleci"} {...others} />);
}

export default Component;
