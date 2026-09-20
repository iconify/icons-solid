import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fi46hz2yu.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="fi46hz2yu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nonicons:elixir-16"} {...others} />);
}

export default Component;
