import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqr9zzbjw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hqr9zzbjw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:table-row-before"} {...others} />);
}

export default Component;
