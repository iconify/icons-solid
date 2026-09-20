import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r79vzpj4a.css';
import '../../css/b/bijcxwbhj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="r79vzpj4a"/><path class="bijcxwbhj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:other-ui-minimize"} {...others} />);
}

export default Component;
