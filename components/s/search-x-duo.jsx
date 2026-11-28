import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gfdide9pn.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/om8qxl02a.css';
import '../../css/j/jrqqhb3az.css';
import '../../css/j/js-z6fnye.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gfdide9pn secondary"/><g class="dt0cm9dhy primary"><path class="om8qxl02a"/><path class="jrqqhb3az"/><path class="js-z6fnye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:search-x-duo"} {...others} />);
}

export default Component;
