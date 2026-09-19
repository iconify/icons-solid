import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fk-6r4b8t.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="fk-6r4b8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:autoflash"} {...others} />);
}

export default Component;
