import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t93wronmj.css';
import '../../css/q/qi5qy6i4f.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="t93wronmj"/><path class="qi5qy6i4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:gridsome"} {...others} />);
}

export default Component;
