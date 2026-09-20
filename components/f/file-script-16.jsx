import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oswg-4fqg.css';
import '../../css/e/eqbv84bej.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="oswg-4fqg"/><path clip-rule="evenodd" class="eqbv84bej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:file-script-16"} {...others} />);
}

export default Component;
