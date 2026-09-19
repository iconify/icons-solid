import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/du8w8acry.css';
import '../../css/u/u36hig5cl.css';
import '../../css/q/qgf49f1ih.css';
import '../../css/d/dl4fjbb9m.css';
import '../../css/z/z36x42tph.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="du8w8acry"/><path class="u36hig5cl"/><path class="qgf49f1ih"/><path class="dl4fjbb9m"/><path class="z36x42tph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:cloud-jobs-api"} {...others} />);
}

export default Component;
