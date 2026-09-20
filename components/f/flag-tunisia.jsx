import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8cxt48ie.css';
import '../../css/u/ud3dsh8zy.css';
import '../../css/g/g-4znmb1j.css';
import '../../css/z/z6fs5vb8t.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="e8cxt48ie"/><circle class="ud3dsh8zy"/><path class="g-4znmb1j"/><path class="z6fs5vb8t"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-tunisia"} {...others} />);
}

export default Component;
