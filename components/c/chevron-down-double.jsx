import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h9j2cqhmq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h9j2cqhmq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chevron-down-double"} {...others} />);
}

export default Component;
