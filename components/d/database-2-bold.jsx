import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xfoyym1_j.css';
import '../../css/e/etmwjccup.css';
import '../../css/u/un9j7db-y.css';
import '../../css/n/ntxtlllhu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xfoyym1_j"/><path class="etmwjccup"/><path class="un9j7db-y"/><path class="ntxtlllhu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:database-2-bold"} {...others} />);
}

export default Component;
