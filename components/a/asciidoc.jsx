import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g6d8rs0kr.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="g6d8rs0kr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:asciidoc"} {...others} />);
}

export default Component;
