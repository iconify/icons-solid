import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cjwnci-_l.css';
import '../../css/i/izsswccel.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cjwnci-_l"/><path class="izsswccel"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:cross-reference-24"} {...others} />);
}

export default Component;
