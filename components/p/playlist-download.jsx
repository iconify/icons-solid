import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/coqrrpldk.css';
import '../../css/e/eyv0p3buw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="coqrrpldk"/><path class="eyv0p3buw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:playlist-download"} {...others} />);
}

export default Component;
