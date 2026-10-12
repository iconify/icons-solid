import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b9u5g0bja.css';
import '../../css/s/sigei6ulc.css';
import '../../css/a/a09196i_r.css';
import '../../css/z/ze35a9bxf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b9u5g0bja"/><path class="sigei6ulc"/><path class="a09196i_r"/><path class="ze35a9bxf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:mail-search-duotone"} {...others} />);
}

export default Component;
