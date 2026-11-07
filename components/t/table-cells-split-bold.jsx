import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a6wexobdx.css';
import '../../css/o/o6xgc5beu.css';
import '../../css/y/ytjzqkm7e.css';
import '../../css/n/n237x3tme.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a6wexobdx"/><path class="o6xgc5beu"/><path class="ytjzqkm7e"/><path class="n237x3tme"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:table-cells-split-bold"} {...others} />);
}

export default Component;
