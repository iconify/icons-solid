import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mexeg9nfy.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="mexeg9nfy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:database-subtract-2-raid-storage-code-disk-programming-database-array-hard-disc-minus-solid"} {...others} />);
}

export default Component;
