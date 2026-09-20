import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c48zpqb1g.css';
import '../../css/a/ae2dujtsd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="c48zpqb1g"/><path class="ae2dujtsd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:clangd"} {...others} />);
}

export default Component;
