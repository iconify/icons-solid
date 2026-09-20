import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/x/xyxh5qb5m.css';
import '../../css/k/kqzqjtu7i.css';
import '../../css/k/kzmvz_b_v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="xyxh5qb5m"/><path class="kqzqjtu7i"/><path class="kzmvz_b_v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:paper-alt"} {...others} />);
}

export default Component;
