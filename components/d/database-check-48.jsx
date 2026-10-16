import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lzpdxtbdv.css';
import '../../css/s/szze3yyxf.css';
import '../../css/d/dhb5rkb0l.css';
import '../../css/z/z4sj3ixdz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lzpdxtbdv"/><path class="szze3yyxf"/><path class="dhb5rkb0l"/><path class="z4sj3ixdz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:database-check-48"} {...others} />);
}

export default Component;
