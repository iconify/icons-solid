import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wal1i4bpe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wal1i4bpe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:reference-point-centered"} {...others} />);
}

export default Component;
