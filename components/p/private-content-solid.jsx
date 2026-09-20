import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zdx4y4vma.css';
import '../../css/r/rslfarb6v.css';
import '../../css/h/h9hstt17t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zdx4y4vma"/><path class="rslfarb6v"/><path class="h9hstt17t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:private-content-solid"} {...others} />);
}

export default Component;
