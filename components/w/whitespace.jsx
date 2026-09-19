import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ip7p42btd.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ip7p42btd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:whitespace"} {...others} />);
}

export default Component;
