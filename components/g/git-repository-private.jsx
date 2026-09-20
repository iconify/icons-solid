import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q409n5tsy.css';
import '../../css/m/mi4ud5ykd.css';
import '../../css/l/lz8pembln.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="q409n5tsy"/><path class="mi4ud5ykd"/><path class="lz8pembln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:git-repository-private"} {...others} />);
}

export default Component;
