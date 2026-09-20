import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x9r6jx.css';
import '../../css/t/txhpbi.css';
import '../../css/s/so-from-66.css';
import '../../css/d/d-3crpcp.css';
import '../../css/d/d-70g21a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x9r6jx"/><path class="txhpbi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:cellphone"} {...others} />);
}

export default Component;
