import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/v/v7xlmkp8l.css';
import '../../css/n/nyegbqbkc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="v7xlmkp8l"/><path class="nyegbqbkc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:recycle-bin"} {...others} />);
}

export default Component;
