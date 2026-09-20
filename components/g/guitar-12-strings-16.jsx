import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eajvrw2xf.css';
import '../../css/g/gdkovxbre.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="eajvrw2xf"/><path class="gdkovxbre"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:guitar-12-strings-16"} {...others} />);
}

export default Component;
