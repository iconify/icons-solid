import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h-8qs0b7j.css';
import '../../css/j/jyuddqs9y.css';
import '../../css/o/ouonzyb1v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h-8qs0b7j"/><path class="jyuddqs9y"/><path class="ouonzyb1v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:git-commit-vertical-duotone"} {...others} />);
}

export default Component;
