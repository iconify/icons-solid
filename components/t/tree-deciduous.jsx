import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/bzj1oubop.css';
import '../../css/t/tazztl59k.css';
import '../../css/n/nus-wqbbu.css';
import '../../css/o/ouemy9ohd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="bzj1oubop wm-shadow"/><path class="tazztl59k wm-shadow"/><path class="nus-wqbbu"/><path class="ouemy9ohd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:tree-deciduous"} {...others} />);
}

export default Component;
