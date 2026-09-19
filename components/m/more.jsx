import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/djr264bkf.css';
import '../../css/k/kb4k8nblj.css';
import '../../css/c/c0pinfbcc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="djr264bkf"/><path class="kb4k8nblj"/><path class="c0pinfbcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:more"} {...others} />);
}

export default Component;
