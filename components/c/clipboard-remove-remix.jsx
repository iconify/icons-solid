import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ea0b2cokw.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="ea0b2cokw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:clipboard-remove-remix"} {...others} />);
}

export default Component;
