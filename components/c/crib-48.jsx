import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k800nzeoy.css';
import '../../css/e/eawggbbqu.css';
import '../../css/z/z7c6bib6i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="k800nzeoy"/><path class="eawggbbqu"/><path class="z7c6bib6i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:crib-48"} {...others} />);
}

export default Component;
