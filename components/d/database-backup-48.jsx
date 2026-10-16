import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lzpdxtbdv.css';
import '../../css/s/szze3yyxf.css';
import '../../css/d/dhb5rkb0l.css';
import '../../css/a/a-8czfekn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lzpdxtbdv"/><path class="szze3yyxf"/><path class="dhb5rkb0l"/><path class="a-8czfekn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:database-backup-48"} {...others} />);
}

export default Component;
