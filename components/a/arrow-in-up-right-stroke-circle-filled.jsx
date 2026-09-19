import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dncihhclw.css';
import '../../css/a/a2k6oubdw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dncihhclw"/><path class="a2k6oubdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-in-up-right-stroke-circle-filled"} {...others} />);
}

export default Component;
