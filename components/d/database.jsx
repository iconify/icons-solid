import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pwdvyobga.css';
import '../../css/c/cqbz3jbwz.css';
import '../../css/w/wu_1q67jj.css';
import '../../css/e/euwoe6oni.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="pwdvyobga"/><path class="cqbz3jbwz"/><path class="wu_1q67jj"/><path class="euwoe6oni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:database"} {...others} />);
}

export default Component;
