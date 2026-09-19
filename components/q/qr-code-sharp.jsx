import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ls4d_78wt.css';
import '../../css/z/z6z042bmd.css';
import '../../css/a/a-zsnuk-t.css';
import '../../css/w/wx0qoilek.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ls4d_78wt"/><path class="z6z042bmd"/><path class="a-zsnuk-t"/><path class="wx0qoilek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:qr-code-sharp"} {...others} />);
}

export default Component;
