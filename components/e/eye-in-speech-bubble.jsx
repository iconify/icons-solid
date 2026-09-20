import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c94fvigpe.css';
import '../../css/o/o2w5jcckl.css';
import '../../css/b/b5njnqb9q.css';
import '../../css/c/cuexzmbor.css';
import '../../css/o/oxnwwcb0o.css';
import '../../css/z/zgesedcxp.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="c94fvigpe"/><circle class="o2w5jcckl"/><path class="b5njnqb9q"/><circle class="cuexzmbor"/><circle class="oxnwwcb0o"/><circle class="zgesedcxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:eye-in-speech-bubble"} {...others} />);
}

export default Component;
