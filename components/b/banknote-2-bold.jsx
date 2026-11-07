import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pq8x0oj0m.css';
import '../../css/g/gi40zsmhu.css';
import '../../css/a/a1okgrd2g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pq8x0oj0m"/><path class="gi40zsmhu"/><path clip-rule="evenodd" class="a1okgrd2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:banknote-2-bold"} {...others} />);
}

export default Component;
