import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt2iuqb7j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dt2iuqb7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:currency-hnl"} {...others} />);
}

export default Component;
