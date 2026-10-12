import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nqzyqi4ro.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nqzyqi4ro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:list-check-rtl"} {...others} />);
}

export default Component;
