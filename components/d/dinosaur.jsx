import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r25x30bxz.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="r25x30bxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:dinosaur"} {...others} />);
}

export default Component;
