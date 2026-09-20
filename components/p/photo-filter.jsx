import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/foqnye_be.css';
import '../../css/z/z6d4gv1ed.css';
import '../../css/i/inqet5b8a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="foqnye_be"/><circle class="z6d4gv1ed"/><circle class="inqet5b8a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:photo-filter"} {...others} />);
}

export default Component;
