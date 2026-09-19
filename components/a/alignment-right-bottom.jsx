import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/l/ljdas5boi.css';
import '../../css/u/uv0y_5b5f.css';
import '../../css/j/j6hzilbmb.css';
import '../../css/c/cegss9fjj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="gopnm44um"><rect class="ljdas5boi"/><path class="uv0y_5b5f"/><path class="j6hzilbmb"/><path class="cegss9fjj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:alignment-right-bottom"} {...others} />);
}

export default Component;
