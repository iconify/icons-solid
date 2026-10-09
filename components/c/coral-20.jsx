import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kfi4ayb5u.css';
import '../../css/l/ljp18512i.css';
import '../../css/e/eqwghdb8t.css';
import '../../css/p/pdcho1m7g.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kfi4ayb5u"/><path class="ljp18512i"/><path class="eqwghdb8t"/><path class="pdcho1m7g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:coral-20"} {...others} />);
}

export default Component;
