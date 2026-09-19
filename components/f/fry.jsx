import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sklifk85i.css';
import '../../css/p/pedb1bc2f.css';
import '../../css/v/v7tfftbgx.css';
import '../../css/h/h81ghgbqt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="sklifk85i"/><path class="pedb1bc2f"/><path class="v7tfftbgx"/><path class="h81ghgbqt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:fry"} {...others} />);
}

export default Component;
