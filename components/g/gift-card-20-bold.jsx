import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l6dd8jb9u.css';
import '../../css/f/fsk9461bq.css';
import '../../css/n/nf5sa9buz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="l6dd8jb9u"/><path class="fsk9461bq"/><path class="nf5sa9buz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gift-card-20-bold"} {...others} />);
}

export default Component;
