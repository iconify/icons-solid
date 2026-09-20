import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p9wrg4psw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="p9wrg4psw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:mail"} {...others} />);
}

export default Component;
