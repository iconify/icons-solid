import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/omoj0t5wj.css';
import '../../css/k/k5odk7fgv.css';
import '../../css/b/b3v853bfd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="omoj0t5wj"/><path class="k5odk7fgv"/><path class="b3v853bfd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:ecology-global-house"} {...others} />);
}

export default Component;
