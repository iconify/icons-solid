import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cvkjf9-0t.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cvkjf9-0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:squares-2x2-solid"} {...others} />);
}

export default Component;
