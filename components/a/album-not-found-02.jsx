import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/b43hu-ogi.css';
import '../../css/z/zgoojs0gb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="b43hu-ogi"/><path class="zgoojs0gb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:album-not-found-02"} {...others} />);
}

export default Component;
