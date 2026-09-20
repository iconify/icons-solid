import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wb1h9fbba.css';
import '../../css/z/za2wbbz4v.css';
import '../../css/l/ljgnpiurg.css';
import '../../css/o/o-jkj3has.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wb1h9fbba"/><circle class="za2wbbz4v"/><circle class="ljgnpiurg"/><circle class="o-jkj3has"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:database"} {...others} />);
}

export default Component;
