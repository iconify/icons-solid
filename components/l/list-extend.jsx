import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smlq9pall.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="smlq9pall"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:list-extend"} {...others} />);
}

export default Component;
