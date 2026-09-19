import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v5y77qbxk.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="v5y77qbxk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:coupling-facility-encryption"} {...others} />);
}

export default Component;
