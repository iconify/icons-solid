import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sf961uwtu.css';
import '../../css/n/nyawz3e_u.css';
import '../../css/e/e2u2rabga.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="sf961uwtu"/><path class="nyawz3e_u"/><path clip-rule="evenodd" class="e2u2rabga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:ogg-16"} {...others} />);
}

export default Component;
