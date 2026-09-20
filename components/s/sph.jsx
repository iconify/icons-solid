import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jpix9fb8w.css';
import '../../css/z/zv089qb6t.css';
import '../../css/q/qbpcbfb9m.css';
import '../../css/b/bgzb_wqcm.css';
import '../../css/q/ql-lm2bge.css';
import '../../css/a/avujeybwt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jpix9fb8w"/><path class="zv089qb6t"/><path class="qbpcbfb9m"/><path class="bgzb_wqcm"/><path class="ql-lm2bge"/><path class="avujeybwt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:sph"} {...others} />);
}

export default Component;
