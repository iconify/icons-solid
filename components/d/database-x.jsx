import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x2glrpu2w.css';
import '../../css/h/h90vlqfmf.css';
import '../../css/t/tj6aivbzl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x2glrpu2w"/><path class="h90vlqfmf"/><ellipse class="tj6aivbzl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:database-x"} {...others} />);
}

export default Component;
