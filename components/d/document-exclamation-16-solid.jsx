import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h0ko-764v.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="h0ko-764v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:document-exclamation-16-solid"} {...others} />);
}

export default Component;
