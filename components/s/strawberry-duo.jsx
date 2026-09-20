import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c1hw_fahx.css';
import '../../css/o/odgz-_bur.css';
import '../../css/w/wrxu7obds.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="c1hw_fahx"/><path class="odgz-_bur"/><path class="wrxu7obds"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:strawberry-duo"} {...others} />);
}

export default Component;
