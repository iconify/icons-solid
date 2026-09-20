import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wu0-9jbgz.css';
import '../../css/b/bcicu-lke.css';
import '../../css/n/ngoqse87p.css';
import '../../css/k/kb-5n5j8g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wu0-9jbgz"/><path class="bcicu-lke"/><path class="ngoqse87p"/><path class="kb-5n5j8g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:pyramid"} {...others} />);
}

export default Component;
