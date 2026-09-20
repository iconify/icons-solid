import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l0hb15zdf.css';
import '../../css/n/nifbesbdu.css';
import '../../css/z/zn93f2bdr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l0hb15zdf"/><path class="nifbesbdu"/><path class="zn93f2bdr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:biso"} {...others} />);
}

export default Component;
