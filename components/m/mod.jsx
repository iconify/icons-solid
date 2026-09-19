import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bqrin0qjl.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/z/zkbefnb4a.css';
import '../../css/d/dtalnipdd.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="bqrin0qjl"/><g class="n1mjunbsu"><path class="zkbefnb4a"/><path class="dtalnipdd"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:mod"} {...others} />);
}

export default Component;
