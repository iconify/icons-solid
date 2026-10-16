import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lzpdxtbdv.css';
import '../../css/s/szze3yyxf.css';
import '../../css/d/dhb5rkb0l.css';
import '../../css/b/bdkl8-dne.css';
import '../../css/j/j3cy-fbyb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lzpdxtbdv"/><path class="szze3yyxf"/><path class="dhb5rkb0l"/><path class="bdkl8-dne"/><path class="j3cy-fbyb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:database-x-48"} {...others} />);
}

export default Component;
