import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rxqkl9rnc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rxqkl9rnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:caret-sort-solid"} {...others} />);
}

export default Component;
