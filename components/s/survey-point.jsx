import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mzjpt7h1x.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mzjpt7h1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:survey-point"} {...others} />);
}

export default Component;
