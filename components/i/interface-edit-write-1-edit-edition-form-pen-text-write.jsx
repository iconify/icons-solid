import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w8qxkjbwi.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="w8qxkjbwi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-edit-write-1-edit-edition-form-pen-text-write"} {...others} />);
}

export default Component;
