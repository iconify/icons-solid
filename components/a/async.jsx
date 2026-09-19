import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cvradzqdb.css';
import '../../css/y/yvl9v5b9e.css';
import '../../css/p/psjdr85ae.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="cvradzqdb"/><path class="yvl9v5b9e"/><path class="psjdr85ae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:async"} {...others} />);
}

export default Component;
