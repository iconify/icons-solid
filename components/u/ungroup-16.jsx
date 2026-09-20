import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tnovpgzed.css';
import '../../css/j/jikoplbuj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="tnovpgzed"/><path clip-rule="evenodd" class="jikoplbuj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:ungroup-16"} {...others} />);
}

export default Component;
