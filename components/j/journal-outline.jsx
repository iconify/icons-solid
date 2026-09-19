import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vyolq2bek.css';
import '../../css/c/c_71ubcpr.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="vyolq2bek"/><path class="c_71ubcpr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:journal-outline"} {...others} />);
}

export default Component;
