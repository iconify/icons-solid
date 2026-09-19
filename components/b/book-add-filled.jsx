import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eaa4zmyug.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eaa4zmyug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:book-add-filled"} {...others} />);
}

export default Component;
