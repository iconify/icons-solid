import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7_4gwb6c.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="g7_4gwb6c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:collapse-solid"} {...others} />);
}

export default Component;
