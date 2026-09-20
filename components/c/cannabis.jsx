import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pkb4mob0t.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pkb4mob0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:cannabis"} {...others} />);
}

export default Component;
