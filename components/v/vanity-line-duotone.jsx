import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a3qp0-bkx.css';
import '../../css/r/rw9suvx5i.css';
import '../../css/d/dgxz1pbwj.css';
import '../../css/p/pq-nuf5df.css';
import '../../css/a/a61wxkb_y.css';
import '../../css/e/eukpbibyf.css';
import '../../css/c/ch-m3yb0q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="a3qp0-bkx"/><path class="rw9suvx5i"/><path class="dgxz1pbwj"/><path class="pq-nuf5df"/><path class="a61wxkb_y"/><path class="eukpbibyf"/><path class="ch-m3yb0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:vanity-line-duotone"} {...others} />);
}

export default Component;
