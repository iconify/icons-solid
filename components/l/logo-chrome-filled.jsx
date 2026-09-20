import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/de11cjbha.css';
import '../../css/h/hj5-87b9h.css';
import '../../css/t/tefo83bja.css';
import '../../css/g/gtksz7byo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="de11cjbha"/><path class="hj5-87b9h"/><path class="tefo83bja"/><path class="gtksz7byo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:logo-chrome-filled"} {...others} />);
}

export default Component;
