import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zcwro9-_f.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="zcwro9-_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:ampersand-solid"} {...others} />);
}

export default Component;
